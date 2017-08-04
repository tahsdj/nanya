
let members = [
	{
		name: '蔡帛融',
		interests: '架設網站、影片剪輯、繪畫',
		opacity: 0,
		imgUrl: 'img/member0.jpg'
	},
	{
		name: '邱芊頻',
		interests: 'Adobe Illustrator、Adobe InDesign、攝影、日文',
		opacity: 0,
		imgUrl: 'img/member1.jpg'
	},
	{
		name: '羅于晴',
		interests: '商品設計、Adobe Illustrator、Adobe photoshop、Solidworks、Rhinoceros、金工、木工、皮革、攝影',
		opacity: 0,
		imgUrl: 'img/member2.jpg'
	},
	{
		name: '李雨珊',
		interests: 'Adobe Illustrator、威力導演',
		opacity: 0,
		imgUrl: 'img/member3.jpg'
	},
	{
		name: '連建榮',
		interests: '攝影、Adobe Illustrator、Adobe photoshop、土木',
		opacity: 0,
		imgUrl: 'img/member4.png'
	},
	{
		name: '黃昱豪',
		interests: 'Adobe photoshop、口說能力',
		opacity: 0,
		imgUrl: 'img/member5.jpg'
	},
	{
		name: '張家瑜',
		interests: '日文、威力導演、智慧財產權相關法規',
		opacity: 0,
		imgUrl: 'img/member6.jpg'
	},
	{
		name: '林亞逸',
		interests: 'Microsoft PowerPoint、Microsoft Word、Microsoft excel、德文、日文',
		opacity: 0,
		imgUrl: 'img/member7.jpg'
	},
	{
		name: '陳靜淳',
		interests: 'Adobe Illustrator、Adobe photoshop、平面繪圖、展版、Solidworks、Rhinoceros、英文',
		opacity: 0,
		imgUrl: 'img/member8.jpg'
	}
]



Vue.component('my-header',{
	template: '#header'
})

Vue.component('plan-board',{
	template: '#plans'
})

Vue.component('member-board',{
	template: '#members',
	data(){
		return {
			members: members,
			hovered: false
		}
	},
	methods: {
		hover(i) {
			this.hovered = !(this.hovered)
			if(this.hovered) {
				this.members[i].opacity = 1
			}else {
				this.members[i].opacity = 0
			}
		},
		opacity(i) {
			return {
				opacity: this.members[i].opacity 
			}
		}
	}
})

var app = new Vue({
	el: '#app',
	data: {

	}
})