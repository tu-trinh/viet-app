import React, {Component} from 'react';
import TitleBar from '../TitleBar';
import {Link} from 'react-router-dom';
// import CustomEditor from '../../pages/admin/CustomEditor';

import {
    convertFromRaw,
    convertToRaw,
    EditorState,
  } from 'draft-js';
  import Editor, { composeDecorators } from 'draft-js-plugins-editor';
  import createToolbarPlugin , { Separator }  from 'draft-js-static-toolbar-plugin';
  import {
    ItalicButton,
    BoldButton,
    UnderlineButton,
    HeadlineOneButton,
    HeadlineTwoButton,
    HeadlineThreeButton,
    UnorderedListButton,
    OrderedListButton,
    BlockquoteButton,
  } from 'draft-js-buttons';
  import createImagePlugin from 'draft-js-image-plugin';
  import createAlignmentPlugin from 'draft-js-alignment-plugin';
  import createFocusPlugin from 'draft-js-focus-plugin';
  import createResizeablePlugin from 'draft-js-resizeable-plugin';
  import createBlockDndPlugin from 'draft-js-drag-n-drop-plugin';
  import createDragNDropUploadPlugin from '@mikeljames/draft-js-drag-n-drop-upload-plugin';
  import editorStyles from '../../editorStyles.css';
  import mockUpload from '../../mockUpload';
  import 'draft-js-static-toolbar-plugin/lib/plugin.css';
  import {stateToHTML} from 'draft-js-export-html';
  
var theContent = {};

  class HeadlinesPicker extends Component {
    componentDidMount() {
      setTimeout(() => { window.addEventListener('click', this.onWindowClick); });
    }
  
    componentWillUnmount() {
      window.removeEventListener('click', this.onWindowClick);
    }
  
    onWindowClick = () =>
      // Call `onOverrideContent` again with `undefined`
      // so the toolbar can show its regular content again.
      this.props.onOverrideContent(undefined);
  
    render() {
      const buttons = [HeadlineOneButton, HeadlineTwoButton, HeadlineThreeButton];
      return (
        <div>
          {buttons.map((Button, i) => // eslint-disable-next-line
            <Button key={i} {...this.props} />
          )}
        </div>
      );
    }
  }
  
  class HeadlinesButton extends Component {
    onClick = () =>
      // A button can call `onOverrideContent` to replace the content
      // of the toolbar. This can be useful for displaying sub
      // menus or requesting additional information from the user.
      this.props.onOverrideContent(HeadlinesPicker);
  
    render() {
      return (
        <div className={editorStyles.headlineButtonWrapper}>
          <button onClick={this.onClick} className={editorStyles.headlineButton}>
            H
          </button>
        </div>
      );
    }
  }
  
  const toolbarPlugin = createToolbarPlugin({
    structure: [
      BoldButton,
      ItalicButton,
      UnderlineButton,
      Separator,
      HeadlinesButton,
      UnorderedListButton,
      OrderedListButton,
      BlockquoteButton,
    ]
  });
  const { Toolbar } = toolbarPlugin;
  
  const focusPlugin = createFocusPlugin();
  const resizeablePlugin = createResizeablePlugin();
  const blockDndPlugin = createBlockDndPlugin();
  const alignmentPlugin = createAlignmentPlugin();
  const { AlignmentTool } = alignmentPlugin;
  
  const decorator = composeDecorators(
    resizeablePlugin.decorator,
    // alignmentPlugin.decorator,
    // focusPlugin.decorator,
    blockDndPlugin.decorator
  );
  const imagePlugin = createImagePlugin({ decorator });
  
  const dragNDropFileUploadPlugin = createDragNDropUploadPlugin({
    handleUpload: mockUpload,
    addImage: imagePlugin.addImage,
  });
  
  const plugins = [
    dragNDropFileUploadPlugin,
    blockDndPlugin,
    focusPlugin,
    alignmentPlugin,
    resizeablePlugin,
    imagePlugin,
    toolbarPlugin,
  ];
  
  /* eslint-disable */
  const initialState = {
      "entityMap": {
          "0": {
              "type": "IMAGE",
              "mutability": "IMMUTABLE",
              "data": {
                  "src": "https://upload.wikimedia.org/wikipedia/en/thumb/8/80/Melisandre-Carice_van_Houten.jpg/220px-Melisandre-Carice_van_Houten.jpg"
              }
          }
      },
      "blocks": [{
          "key": "9gm3s",
          "text": "This is an example lesson. Happy waiting for GOT season 8! :)",
          "type": "unstyled",
          "depth": 0,
          "inlineStyleRanges": [],
          "entityRanges": [],
          "data": {}
      }, {
          "key": "ov7r",
          "text": " ",
          "type": "atomic",
          "depth": 0,
          "inlineStyleRanges": [],
          "entityRanges": [{
              "offset": 0,
              "length": 1,
              "key": 0
          }],
          "data": {}
      }]
  };
  /* eslint-enable */
  
  class CustomEditor extends Component {
    state = {
        editorState: EditorState.createWithContent(convertFromRaw(initialState)),
      };
  
    onChange = (editorState) => {
      this.setState({
        editorState,
      });
      // console.log(stateToHTML(this.state.editorState.getCurrentContent()));
    };
  
    handleSubmit = (e) => {
      e.preventDefault();
      const actualState = this.state.editorState.getCurrentContent();
      const rawState = convertToRaw(actualState);
      theContent = rawState
      console.log(theContent);
      
    }
  
    focus = () => {
      this.editor.focus();
    };
  
    render() {
      return (
        <div>
          <div className={editorStyles.editor} onClick={this.focus}>
            <form onSubmit = {this.handleSubmit}>
              <Toolbar />
              <AlignmentTool />
              <Editor
                editorState={this.state.editorState}
                onChange={this.onChange}
                plugins={plugins}
                ref={(element) => { this.editor = element; }}
              />
              <button type = 'submit'>Insert</button>
            </form>
          </div>
        </div>
      );
    }
  }

export default class AdminEditor extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return(
            <div>
                <TitleBar title = "Admin Editor" color = "blue" backbuttonPath = '/'/>
                <CustomEditor />
            </div>
        )
    }
}