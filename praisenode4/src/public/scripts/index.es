import css from '../css/index.css';

class PraiseButton {
    constructor() {}
    clickAction() {
        axios.post('/updatePraise')
        .then(function(response){
            console.log(response);
        })
        .catch(function(err){
            console.log(err);
        });
    }
}

class Thumb extends PraiseButton{
	constructor(){
		super();
	}
}

class Star extends PraiseButton{
    constructor(){
        super();
    }
}

export {Thumb, Star};