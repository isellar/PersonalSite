import ResumeApp from './ResumeApp';
import ResumeMain from './ResumeMain';

FlowRouter.route('/', {
  action() {
    ReactLayout.render(ResumeApp, {
      children: <ResumeMain />
    });
  }
});
