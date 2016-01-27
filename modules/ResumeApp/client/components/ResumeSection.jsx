import { Component, PropTypes } from 'react';

var rbs = require('react-bootstrap'),
Panel = rbs.Panel;

export default class ResumeSection extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      open: true
    };
  }

  static propTypes = {
    section: PropTypes.object.isRequired
  };

  processContent = function processContent(content, key) {
    key = key ? key : content.key;
  	if(content.type === "text"){
  		return (<p key={key}>{content.text}</p>);
  	}
  	if(content.type === "bold"){
  		return (<b key={key}>{content.text}</b>);
  	}
  	if(content.type === "break"){
  		return (<br key={key}/>);
  	}
  	if(content.type === "link"){
  		var extra = {href: content.ref};
  		return (<a key={key} {...extra}>{content.text}</a>);
  	}
  	if(content.type === "list"){
  		var contents = content.list.map(processContent);
  		return (<div key={key}>{contents}</div>);
  	}
  	if(content.type === "bul-list"){
  		var contents = content.list.map(function(c, key){
  			var element = processContent(c);
  			return (<li key={key}>{element}</li>);
  		});
  		return (<ul key={key}>{contents}</ul>);
  	}
  };

  render() {
    console.log("section " + this.props.section.name)
  	var extra = { name: this.props.section.refname };
  	const title = (
  		<button onClick={ ()=> this.setState({ open: !this.state.open })}><h1>{this.props.section.name}</h1></button>
  	);

    return (
      <div className="row panel-wrapper">
      	<a {...extra} className="ref">&nbsp;</a>
    		<Panel header={title} collapsible expanded={this.state.open}>
    		  {this.processContent(this.props.section.content)}
    		</Panel>	
	    </div>
    );
  }
}
