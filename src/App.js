import React, { Component } from 'react'
import {Button,message,Input,Steps } from 'antd'
const { Step } = Steps;

export default class App extends Component {

	showInfo = ()=>{
		message.error('操作危险！')
	}
	render() {
		return (
			<div>
				<Button onClick={this.showInfo} type="primary">点我</Button>
				<Button type="danger">点我</Button>
				<Button type="link">点我</Button>
				<Input/>
				<button>传统按钮</button>
				<Steps current={1}>
					<Step title="Finished" description="This is a description." />
					<Step title="In Progress" subTitle="Left 00:00:08" description="This is a description." />
					<Step title="Waiting" description="This is a description." />
				</Steps>
			</div>
		)
	}
}
