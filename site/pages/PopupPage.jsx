import Markdown from '../components/Markdown';

export default class Page extends Markdown {
  document = () => {
    return {
      document: require('../../components/popup/demo.md'),
      className: 'popup-page',
    };
  }
}
