import axios from 'axios'

export const state = () => ({
	postsLoaded: [],
	preload: false,
	count: {
		name:'one dollar'
	}
})

export const mutations =  {
	addPost(state, post){
		console.log(post)
		state.postsLoaded.push(post)
		console.log(state.postsLoaded)
	},
	setPosts(state, posts){
		state.postsLoaded = posts
	},
	setPreload(state){
		
		state.preload = !state.preload
	}
}

export const actions = {
	nuxtServerInit({commit}, context){
		return axios.get('https://nuxt-blog-16f8b.firebaseio.com/posts.json')
		.then(res =>{
			console.log(res.data)
			const postsArray = []

			for(let key in res.data){
				postsArray.push({...res.data[key], id: key})
			}
			 commit('setPosts', postsArray)
		})
		.catch(error => console.log(error))
	},
	addPost({commit}, post){
		return axios.post('https://nuxt-blog-16f8b.firebaseio.com/posts.json', post)
		.then(res =>{
			// console.log(res.data)
			commit('addPost', { ...post, id: res.data.name })
		})
		.catch(error => console.log(error))
	},
	doPreload({commit}){
		commit('setPreload')
	}
}

export const getters = {
	getPostsLoaded(state){
		return state.postsLoaded
	}
}