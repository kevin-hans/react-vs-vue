'use strict';

const e = React.createElement;

// 計数器
class CounterR extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState({
        counter: this.state.counter+1,
      });
    }, 1000)
  }

  componentWillUnmount(){
    clearInterval(this.intervalId);
  }

  render() {
    return "React Counter: " + this.state.counter;
  }
}

const domContainer = document.querySelector('#counter_react');
ReactDOM.render(e(CounterR), domContainer);


// Likeコメント
class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked comment number ' + this.props.commentID;
    }

    return (
        <button onClick={() => this.setState({ liked: true })}>
            Like by react
        </button>
    );
  }
}

// Find all DOM containers, and render Like buttons into them.
document.querySelectorAll('.like_button_container')
  .forEach(domContainer => {
    // Read the comment ID from a data-* attribute.
    const commentID = parseInt(domContainer.dataset.commentid, 10);
    ReactDOM.render(
      e(LikeButton, { commentID: commentID }),
      domContainer
    );
  });


// 一覧表示  
function VegetableItemReact(props) {
  return (
    <li className="list-group-item" >{ props.item.text } </li>
   );
}

class VegetableItemListReact extends React.Component {
  constructor(props) {
    super(props);
    this.state = { groceryList: [] };
    this.greet = this.greet.bind(this);
  }

  componentDidMount() {
      this.setState({
        groceryList:  [
          { id: 0, text: 'Vegetables' },
          { id: 1, text: 'Cheese' },
          { id: 2, text: 'Whatever else humans are supposed to eat' }
        ]
      });
  }

  greet(params, event) {
    alert(params.text)
    // `event` is the native DOM event
    if (event) {
      alert(event.target.tagName)
    }
  }

  render() {
    var todolist = this.state.groceryList.map(e => {
        return <VegetableItemReact item= {e}  key={e.id}  onClick={event => this.greet(e, event)} >{e.text}</VegetableItemReact>;       
      }
    )
    return (
      <div>
        <h3>produced by react</h3>
        <ol className="px-2">{ todolist }</ol>
      </div>
      );
    }
}

const domContainer3 = document.querySelector('#vegetable-list-app-react');
ReactDOM.render(e(VegetableItemListReact), domContainer3);

// マウスオーバー時情報を提示
function BindAttributeComponentR(props) {
  return (
    <span title={props.title}>
    マスクをオバーしたら情報をポップアップする！By React
  </span>
   );
}
const domContainer4 = document.querySelector('#bind-attribute-react');
ReactDOM.render(e(BindAttributeComponentR, {title: 'You loaded this page on ' + new Date().toLocaleString()}), domContainer4);