import ResumeApp from './ResumeApp';
import ResumeMain from './ResumeMain';

FlowRouter.route('/', {
  action() {
  	console.log("routing");
    ReactLayout.render(ResumeApp, {
      children: <ResumeMain />
    });
  }
});
