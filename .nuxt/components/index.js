export { default as Cont } from '../../components/Cont.vue'
export { default as Promo } from '../../components/Promo.vue'
export { default as Intro } from '../../components/UI/Intro.vue'
export { default as Newpostform } from '../../components/admin/Newpostform.vue'
export { default as Post } from '../../components/blog/Post.vue'
export { default as Postslist } from '../../components/blog/Postslist.vue'
export { default as Postspreview } from '../../components/blog/Postspreview.vue'
export { default as Comments } from '../../components/comments/Comments.vue'
export { default as NewComment } from '../../components/comments/NewComment.vue'
export { default as Footer } from '../../components/system/Footer.vue'
export { default as Header } from '../../components/system/Header.vue'

export const LazyCont = import('../../components/Cont.vue' /* webpackChunkName: "components/Cont" */).then(c => c.default || c)
export const LazyPromo = import('../../components/Promo.vue' /* webpackChunkName: "components/Promo" */).then(c => c.default || c)
export const LazyIntro = import('../../components/UI/Intro.vue' /* webpackChunkName: "components/UI/Intro" */).then(c => c.default || c)
export const LazyNewpostform = import('../../components/admin/Newpostform.vue' /* webpackChunkName: "components/admin/Newpostform" */).then(c => c.default || c)
export const LazyPost = import('../../components/blog/Post.vue' /* webpackChunkName: "components/blog/Post" */).then(c => c.default || c)
export const LazyPostslist = import('../../components/blog/Postslist.vue' /* webpackChunkName: "components/blog/Postslist" */).then(c => c.default || c)
export const LazyPostspreview = import('../../components/blog/Postspreview.vue' /* webpackChunkName: "components/blog/Postspreview" */).then(c => c.default || c)
export const LazyComments = import('../../components/comments/Comments.vue' /* webpackChunkName: "components/comments/Comments" */).then(c => c.default || c)
export const LazyNewComment = import('../../components/comments/NewComment.vue' /* webpackChunkName: "components/comments/NewComment" */).then(c => c.default || c)
export const LazyFooter = import('../../components/system/Footer.vue' /* webpackChunkName: "components/system/Footer" */).then(c => c.default || c)
export const LazyHeader = import('../../components/system/Header.vue' /* webpackChunkName: "components/system/Header" */).then(c => c.default || c)
