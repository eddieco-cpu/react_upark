//创建“外壳”组件App
import React, {Component} from 'react'
import axios from 'axios'

import Welcome from './components/Welcome'


//创建并暴露App组件
export default class App extends Component {

	state = {
		page1: [],
		// page2: [],
		// page3: [],
		// page4: []
	}

	render() {
		return (
			<div>
				<Welcome/>
				<main className='wrapper'>

					<p>
						新北市領有停車場登記證之路外停車場： 
						<button onClick={this.getParkData} >get data</button><br/>
						<button onClick={this.showParkData} >show data</button>
					</p>
					<br/>
					
				</main>
			</div>
		)
	}



	getParkData = ()=> {	//cors
		axios.get('https://data.ntpc.gov.tw/api/datasets/B1464EF0-9C7C-4A6F-ABF7-6BDF32847E68/json?page=0&size=400')	
			.then( (res) => {
				this.setState({page1: res.data})
				console.log('--- res ---', res.data);
			})
			.catch( (err) => console.warn(err))

		// axios.get('http://localhost:3000/ntpcapi/api/datasets/B1464EF0-9C7C-4A6F-ABF7-6BDF32847E68/json?page=1&size=400')	
		// 	.then( (res) => {
		// 		this.setState({page2: res.data})
		// 	})
		// 	.catch( (err) => console.warn(err))

		// axios.get('http://localhost:3000/ntpcapi/api/datasets/B1464EF0-9C7C-4A6F-ABF7-6BDF32847E68/json?page=2&size=400')	
		// 	.then( (res) => {
		// 		this.setState({page3: res.data})
		// 	})
		// 	.catch( (err) => console.warn(err))

		// axios.get('http://localhost:3000/ntpcapi/api/datasets/B1464EF0-9C7C-4A6F-ABF7-6BDF32847E68/json?page=3&size=400')	
		// 	.then( (res) => {
		// 		this.setState({page4: res.data})
		// 	})
		// 	.catch( (err) => console.warn(err))

		//關於這個 api 的一些介紹:
		/**
		 * page= number			要看第幾頁
		 * size= number     每頁筆數是多少
		 */
	}
	showParkData = ()=> {
		let {
			page1, 
			// page2, 
			// page3, 
			// page4
		} = this.state
		console.log('page1', page1);
		// console.log('page2', page2);
		// console.log('page3', page3);
		// console.log('page4', page4);

		let Xindian = []
		Xindian.push(...page1.filter(el => el.AREA === '新店區'))
		// Xindian.push(...page2.filter(el => el.AREA === '新店區'))
		// Xindian.push(...page3.filter(el => el.AREA === '新店區'))
		// Xindian.push(...page4.filter(el => el.AREA === '新店區'))

		console.log('新店', Xindian)
	}

}
