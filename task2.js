var express = require('express');
var router =express.Router();
router.get('/',function(req,res){
  res.sendFile(__dirname + '/task2.htm')
})
router.get('/:emotion',function(req,res){
    
    emotion = req.params
    emotion= Object.values(emotion);
    var emotions = [
        {
            title: 'happy',
            imagePath: '/images/task2/happy.jpeg',
            quotePath: '/images/task2/happy/happy1.jpg'
        },
        {
            title: 'sad',
            imagePath: '/images/task2/sad.jpeg',
            quotePath: '/images/task2/sad/sad1.jpg'
        },
        {
            title: 'stress',
            imagePath: '/images/task2/stress.jpeg',
            quotePath: '/images/task2/stress/stress1.jpg'
        },
        {
            title: 'angry',
            imagePath: '/images/task2/angry.jpeg',
            quotePath: '/images/task2/angry/angry1.jpg'
        }
      ];
    const found = emotions.find(emoti => emoti.title == emotion)
    console.log(found)
    res.render('task2-hbs',found)
});

module.exports = router;
