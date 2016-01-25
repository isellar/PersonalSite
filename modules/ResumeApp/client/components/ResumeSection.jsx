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

  processContent = function processContent(content) {
  	if(content.type === "text"){
  		return (<p>{content.text}</p>);
  	}
  	if(content.type === "bold"){
  		return (<b>{content.text}</b>);
  	}
  	if(content.type === "break"){
  		return (<br />);
  	}
  	if(content.type === "link"){
  		var extra = {href: content.ref};
  		return (<a {...extra}>{content.text}</a>);
  	}
  	if(content.type === "list"){
  		var contents = content.list.map(processContent);
  		return (<div>{contents}</div>);
  	}
  	if(content.type === "bul-list"){
  		var contents = content.list.map(function(c){
  			var element = processContent(c);
  			return (<li>{element}</li>);
  		});
  		return (<ul>{contents}</ul>);
  	}
  };

  render() {
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
