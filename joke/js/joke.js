const customName = document.getElementById('customname'); /* 对输入名字文本框的引用 */
const randomize = document.querySelector('.randomize'); /* 对随机生成笑话按钮的引用 */
const story = document.querySelector('.story'); /* 生成的笑话 */

/* 函数，数组 */
function randomValueFromArray(array) {
	const random = Math.floor(Math.random() * array.length);
	return array[random];
}


var storyText = ':insertx:穿得很危险，路上遇见了小韩和:inserty:向他扔了一头150公斤，但长得很可爱的:insertz:，吓得:insertx:赶紧掏出了50米大刀。'
var insertX = ['胜胜', '涛涛', '琦琦'];
var insertY = ['小天', '小田', '毛毛'];
var insertZ = ['涛涛', '峰峰', '天天'];

/* 点击按钮监听器 */
randomize.addEventListener('click', result);


function result() {
	var newStory = storyText;

	var xItem = randomValueFromArray(insertX);
	var yItem = randomValueFromArray(insertY);
	var zItem = randomValueFromArray(insertZ);
	/* 将insertx、inserty、insertz替换为xItem、yItem、zItem */
	newStory = newStory.replace(':insertx:', xItem);
	newStory = newStory.replace(':insertx:', xItem);
	newStory = newStory.replace(':inserty:', yItem);
	newStory = newStory.replace(':insertz:', zItem);

	/* 输入名字不为空，就把小韩替换为输入的名字 */
	if (customName.value !== '') {
		const name = customName.value;
		newStory = newStory.replace('小韩', name);
	}

/* 替换笑话中的公斤，米为美制单位 */
	if (document.getElementById("english").checked) {
		var weight=Math.round(150*2.20)+'磅'; /* 1 千克(公斤)=2.20 磅*/
		var meter=Math.round(50*3.28)+'英尺'; /* 1 米=3.28 英尺*/
		newStory=newStory.replace('150公斤',weight);
		newStory=newStory.replace('50米',meter);
	}




	story.textContent = newStory;
	story.style.visibility = 'visible'; /* 显示笑话*/
}
