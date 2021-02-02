<style>
	#app {
 /* padding: 32px; */
 margin-bottom: 20px;
}

.todo-list {
  padding: 0;
  margin: 10px;
  width: 500px;
}

.todo-list li {
  position: relative;
  list-style: none;
  padding: 20px;
  border: 1px solid rgba(0, 0, 0, 0.045);
  margin-bottom: 20px;
}

.todo-list li span:first-child {
 padding-right: 20px;
}

.todo-list li:hover .todo-list-action {
  display: block;
}

.todo-action {
  margin-bottom: 5px;
  text-align: right;
  width: 500px;
}

.todo-btn {
  margin-bottom: 20px;
  padding: 0 25px;
  font-size: 20px;
  line-height: 3;
  border: 1px solid #321391;
  background: #4c0987;
  color: white;
  border-radius: 50%;
}
.todo-btn2 {
  margin-bottom: 20px;
  padding: 0 15px;
  font-size: 20px;
  line-height: 3;
  border: 1px solid #321391;
  background: #4c0987;
  color: white;
  border-radius: 60%;
}
.todo-form {
  display: flex;
 margin-top: 20px;

}

.todo-form input {
  flex: 1;
  line-height: 1;
  border: 1px solid #2a4691;
  border-radius: 5px;
  margin-right: 10px;
  /* padding: 10px 20px; */
  padding: 10px 20px;
}

.todo-list-action {
  display: none;
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translate(0, -50%);
}

.todo-list-action button {
  border: 1px solid #152691;
  background: #152691;
  color: white;
  padding: 2px 15px;
  border-radius: 200px;
}

.todo-list-action button:not(:last-child) {
  margin-right: 10px;
}

.through {
  text-decoration: line-through;
}
.mybtn{
	width: 20px;
	height: 20px;
	background: white;
}
.mybtn button{
	width: 20px;
	height: 20px;
	background: red;
	content: '√';
}


input[type=checkbox]{
	     cursor: pointer;
	     position: relative;
	     width: 15px;
	     height: 15px;
	     font-size: 14px;
	}
	
	input[type=checkbox]::after{
	     position: absolute;
	     top: 0;
	     background-color: #000080;
	     
	     width: 15px;
	     height: 15px;
	     display: inline-block;
	     visibility: visible;
	     padding-left: 0px;
	     text-align: center;
	     content: ' ';
	     border-radius: 3px
	}
	        
	input[type=checkbox]:checked::after{
	     content: "✓";
		 color: white;
	     font-size: 12px;
	     font-weight: bold;
	}
	.month{
		color: #000080;
		font-size: 30px;
		font-family: Algerian;
	}
	.day{
		color: #000080;
		font-size: 30px;
		font-family: Blackadder ITC;
	}
	.week{
		
		color: #000080;
		font-size: 30px;
/* 		font-family: Brush Script MT;
 */
		font-family: Chiller;
}
.p1{
	
	height: 15px;
	width: 20px;
}
.p2{
	height: 15px;
	width: 20px;
}
</style>

<template>
	<div id="app">
		<div>
			<!-- <span v-bind:class="item.success">{{ item.date }}</span> -->
<!-- 			<span>{{nowTime}}</span>
 -->		
			<span class="month">{{nowMonth}}</span>
			<br>
			<span class="day">{{nowDate}}</span>&nbsp;&nbsp;
			<span class="week">{{week}}</span>
			
			 
		</div>
		<div>
			<ul class="todo-list">
				<li v-for="(item, index) in todo" v-bind:key="index">
					<!-- <button class="mybtn" @click="handleSuccess(index)"></button> -->
			<label><input class="check" type="checkbox" name="like" value="2" @click="handleSuccess(index)"></label>
			&nbsp;&nbsp;&nbsp;&nbsp;
					<span v-bind:class="item.success">{{ item.title }}</span>
					<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
					<span v-bind:class="item.success">{{ item.datetime }}</span>
					
					<!-- <span v-bind:class="item.success">{{ item.title }}</span> -->
					<div class="todo-list-action">
						
						<!-- <button class="action-btn" @click="handleSuccess(index)">✅</button> -->
						<button class="action-btn" @click="handleUpdate(index)">
							修改
						</button>
						<button class="action-btn" @click="handleDelete(index)">
							删除
						</button>
					</div>
				</li>
			</ul>
			<div class="todo-action">
				<!-- <button @click="handleShowAdd" class="todo-btn">+</button> -->

				<div v-show="show" class="todo-form">
					<input class="p1" v-model="form.title" type="text" placeholder="请输入要做的事情" />
					<input class="p2" v-model="form.datetime" type="time" placeholder="请选择时间" />
					<button class="todo-btn2" v-show="!update" @click="handleAdd">
						add
					</button>
					<br />
					<!-- <button class="todo-btn" v-show="update" @click="handleUpdateTodo">
						update
					</button> -->
				</div>
				<button @click="handleShowAdd" class="todo-btn">+</button>
			</div>

			<!-- <ul class="todo-list">
				<li v-for="(item, index) in todo" v-bind:key="index">
					<span v-bind:class="item.success">{{ item.date }}</span>
					<span v-bind:class="item.success">{{ item.title }}</span>
					<div class="todo-list-action">
						<button class="action-btn" @click="handleSuccess(index)">✅</button>
						<button class="action-btn" @click="handleUpdate(index)">
							修改
						</button>
						<button class="action-btn" @click="handleDelete(index)">
							删除
						</button>
					</div>
				</li>
			</ul> -->
		</div>
		
	</div>
</template>

<script>
	import Hello from "./components/HelloWorld";

	export default {
		name: "APP",

		components: {
			Hello
		},

		beforeCreate() {
			console.log("创建Vue实例前");
		},

		created() {
			console.log("创建Vue实例");
			this.nowTimes()
		},

		beforeMount() {
			console.log("初始化Vue实例前");
		},
		

		mounted() {
			
		},

		beforeUpdate() {
			console.log("更新Vue实例前");
		},

		updated() {
			console.log("更新Vue实例");
		},

		methods: {
			handleShowAdd() {
				const {
					show
				} = this;
				show ? (this.show = false) : (this.show = true);

				this.update = false;
				this.index = 0;
				this.form = {
					title: "",
					datetime: ""
				};
			},

			handleAdd() {
				this.todo.push(this.form);

				this.form = {
					title: "",
					datetime: ""
				};

				this.show = false;
			},

			handleSuccess(index) {
				const {
					todo
				} = this;

				todo[index].success ?
					(this.todo[index].success = "") :
					(this.todo[index].success = "through");
			},

			handleUpdate(index) {
				this.handleShowAdd();

				const {
					todo
				} = this;
				this.form = todo[index];
				this.update = true;
			},

			handleUpdateTodo() {
				this.form = {
					title: "",
					datetime: ""
				};

				this.show = false;
			},

			handleDelete(index) {
				this.todo.splice(index, 1);
			},
			timeFormate(timeStamp) {
				let year = new Date(timeStamp).getFullYear();
				let month =new Date(timeStamp).getMonth() + 1 < 10? "0" + (new Date(timeStamp).getMonth() + 1): new Date(timeStamp).getMonth() + 1;
				let date =new Date(timeStamp).getDate() < 10? "0"  + new Date(timeStamp).getDate(): new Date(timeStamp).getDate();
				let hh =new Date(timeStamp).getHours() < 10? "0"  + new Date(timeStamp).getHours(): new Date(timeStamp).getHours();
				let mm =new Date(timeStamp).getMinutes() < 10? "0"  + new Date(timeStamp).getMinutes(): new Date(timeStamp).getMinutes();
				let ss =new Date(timeStamp).getSeconds() < 10? "0"  + new Date(timeStamp).getSeconds(): new Date(timeStamp).getSeconds();
				this.nowDate = year + "-" + month + "-" + date +" "+" ";
				this.nowTime = hh+":"+mm+":"+ss;
				
				var dateString = this.nowDate;
				var dateObject = new Date(dateString);
				this.nowMonth=dateObject.getMonth();
				if(this.nowMonth==1){
					this.nowMonth="February"
				}
				if(this.nowMonth==2){
					this.nowMonth="March"
				}
				if(this.nowMonth==3){
					this.nowMonth="April"
				}
				if(this.nowMonth==4){
					this.nowMonth="May"
				}
				if(this.nowMonth==5){
					this.nowMonth="June"
				}
				if(this.nowMonth==6){
					this.nowMonth="July"
				}
				if(this.nowMonth==7){
					this.nowMonth="August"
				}
				if(this.nowMonth==8){
					this.nowMonth="September"
				}
				if(this.nowMonth==9){
					this.nowMonth="October"
				}
				if(this.nowMonth==10){
					this.nowMonth="November"
				}
				if(this.nowMonth==11){
					this.nowMonth="December"
				}
				if(this.nowMonth==12){
					this.nowMonth="January"
				}
				
				this.week=dateObject.getDay()
				if(this.week==1){
					this.week="Monday"
				}
				if(this.week==2){
					this.week="Tuesday"
				}
				if(this.week==3){
					this.week="Wednesday"
				}
				if(this.week==4){
					this.week="Thursday"
				}
				if(this.week==5){
					this.week="Friday"
				}
				if(this.week==6){
					this.week="Saturday"
				}
				if(this.week==0){
					this.week="Sunday"
				}
				
			},
			// 定时器函数
			nowTimes(){
				this.timeFormate(new Date());
				setInterval(this.nowTimes,30*1000);
			},
		},
		
		
		
		data() {
			return {
				show: false,
				update: false,
				todo: [{
						title: "Nitendo switch",
						datetime: "13:20",
						success: ""
					},
					{
						title: "Cat tower",
						datetime: "13:25",
						success: ""
					},
					{
						title: "Winter shoes for mom",
						datetime: "13:30",
						success: ""
					}
				],
				form: {
					title: "",
					datetime: "",
					success: ""
				},
				nowDate:"",
	
				nowMonth:"",
				nowDay:"",
				nowTime:"",
				week:"",
				
			};
		}
	};
</script>
