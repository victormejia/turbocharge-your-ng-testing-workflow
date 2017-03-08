// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
import Interactive from "../assets/interactive";

import Terminal from "spectacle-terminal";
import CodeSlide from 'spectacle-code-slide';

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  city: require("../assets/city.jpg"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png"),
  poll: require('../assets/ng-test-twitter-poll.png'),
  chromeTest: require('../assets/ng-test-chrome.png'),
  coverage: require('../assets/coverage.png'),
  coverageTerminal: require('../assets/coverage-terminal.png')
};

preloader(images);

const theme = createTheme({
  primary: "#2d2d2d",
  secondary: "white",
  tertiary: "#03A9FC",
  quartenary: "#CECECE"
});

const terminal = {
  purple: '#d6bcfc',
  green: '#5af78e',
  yellow: '#f4f99d',
  cyan: '#9aedfe'
};

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>
          <Slide transition={["fade"]} bgColor="primary">
            <Layout>
              <Fill>
                <Heading size={2} caps textColor="secondary" margin={10} textAlign="left">
                  Throw Your Tests Up In There
                </Heading>
              </Fill>
              <Fill>
                <Heading size={2} caps textColor="secondary" margin={10} textAlign="right">
                  And Run ‘em Like You Just Don’t Care
                </Heading>
              </Fill>
            </Layout>
          </Slide>
          <Slide transition={["fade"]} bgColor="secondary">
            <Image src={images.poll.replace('/', '')} margin="0px auto 40px" height="500px" />
          </Slide>
          <Slide transition={["fade"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="secondary">
              Setup & Configuration
            </Heading>
          </Slide>
          <Slide transition={["fade"]} bgColor="primary">
            <Terminal title="" output={[
              "▶ ng new ng-testy",
              <div>
                <div style={{ color: "#5af78e"}}>Installing packages for tooling via npm. </div>
                <div style={{ color: "#5af78e"}}>Installed packages for tooling via npm.</div>
                <div style={{ color: "#5af78e"}}>Project 'ng-testy' successfully created.</div>
              </div>]} />
          </Slide>
          <Slide transition={["fade"]} bgColor="primary">
            <Terminal title="" output={[
                "Projects/code/ng-testy  master ✗",
                <div>
                ▶ ng test
                </div>,
                <div>
                  <div><span style={{ color: terminal.yellow }}>07 03 2017 21:40:55.276:WARN [karma]:</span> No captured browser, open http://localhost:9876/</div>
                  <div><span style={{ color: terminal.green }}>07 03 2017 21:40:55.284:INFO [karma]:</span>  Karma v1.4.1 server started at http://0.0.0.0:9876/</div>
                  <div><span style={{ color: terminal.green }}>07 03 2017 21:40:55.284:INFO [launcher]:</span>  Launching browser Chrome with unlimited concurrency</div>
                  <div><span style={{ color: terminal.green }}>07 03 2017 21:40:55.313:INFO [launcher]:</span>  Starting browser Chrome</div>
                  <div><span style={{ color: terminal.green }}>07 03 2017 21:40:56.136:INFO [Chrome 56.0.2924 (Mac OS X 10.12.0)]:</span> Connected on socket 8srCrB3hNBdBAl2gAAAA with id 27646286</div>
                  <div>Chrome 56.0.2924 (Mac OS X 10.12.0): Executed 3 of 3 <span style={{ color: terminal.yellow }}>SUCCESS</span> (0.224 secs / 0.2 secs)</div>
                </div>]}
              />
          </Slide>
          <Slide transition={["fade"]} bgColor="secondary">
            <Image src={images.chromeTest.replace('/', '')} height="600px" />
          </Slide>
          <CodeSlide
            transition={["fade"]}
            lang="js"
            code={require("raw-loader!../assets/karma.conf.js")}
            ranges={[
              { loc: [0, 41], title: "karma.conf.js" },
              { loc: [6, 7], note: "plugins" },
              { loc: [17, 21], note: "coverage with istanbul" },
              { loc: [24, 25], note: "reporters" },
              { loc: [29, 30], note: "browsers" }
            ]}/>
          <Slide transition={["fade"]} bgColor="primary">
            <Terminal title="" output={[
              <div>
                <span style={{ color: terminal.purple }}>Projects/code/ng-testy</span>
                <span style={{ color: terminal.cyan }}> master </span>
                <span style={{ color: terminal.yellow }}>✗</span>
              </div>,
              "▶ ng test --watch --code-coverage",
              "▶ cd coverage"
              ]} />
          </Slide>
          <Slide transition={["fade"]} bgColor="secondary">
            <Image src={images.coverage.replace('/', '')} height="600px" />
          </Slide>
          <Slide transition={["fade"]} bgColor="primary">
            <Text textSize="1.5em" margin="20px" bold textColor="secondary">install karma-spec-reporter</Text>
            <Terminal title="" output={[
              <div>
                <span style={{ color: terminal.purple }}>Projects/code/ng-testy</span>
                <span style={{ color: terminal.cyan }}> master </span>
                <span style={{ color: terminal.yellow }}>✗</span>
              </div>,
              "▶ npm install karma-spec-reporter --save-dev",
              ]} />
          </Slide>
          <CodeSlide
            transition={["fade"]}
            lang="js"
            code={require("raw-loader!../assets/karma.conf.summary.js")}
            ranges={[
              { loc: [0, 41], title: "Make terminal reporting pretty" },
              { loc: [6, 7], note: 'add spec reporter to plugins' },
              { loc: [24, 25], note: 'change reporter to "spec"' },
              { loc: [17, 19], note: 'add "text-summary" for istanbul reporter' }
            ]}/>
          <Slide transition={["fade"]} bgColor="secondary">
            <Image src={images.coverageTerminal.replace('/', '')} margin="-100px 0px 0px -200px" height="800px" />
          </Slide>
          <Slide transition={["fade"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="secondary">
              Feedback loop for results
            </Heading>
          </Slide>
          <Slide transition={["fade"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="secondary">
              CONTENT HERE
            </Heading>
          </Slide>
          <Slide transition={["fade"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="secondary">
              TestBed API
            </Heading>
          </Slide>
          <Slide transition={["fade"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="secondary">
              CONTENT HERE
            </Heading>
          </Slide>
          <Slide transition={["fade"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="secondary">
              Maintaining Tests
            </Heading>
          </Slide>
          <Slide transition={["fade"]} bgColor="primary" textColor="secondary">
            <Text textSize="1.5em" margin="20px" bold textColor="secondary">organize tests!</Text>
            <List>
              <Appear><ListItem>make use of suites with describe</ListItem></Appear>
              <Appear><ListItem>top-level "describe" for component</ListItem></Appear>
              <Appear><ListItem>nested "describe" for functions</ListItem></Appear>
              <Appear><ListItem>"describe" for component interaction & functionality</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["fade"]} bgColor="primary" textColor="secondary">
            <Text textSize="1.5em" margin="20px" bold textColor="secondary">a test should tell a story</Text>
            <List>
              <Appear><ListItem>AAA (Arrange, Act, Assert)</ListItem></Appear>
              <Appear><ListItem>don't follow DRY "to a tee"</ListItem></Appear>
            </List>
          </Slide>
          <CodeSlide
            transition={["fade"]}
            lang="js"
            code={require("raw-loader!../assets/dependencies")}
            ranges={[
              { loc: [0, 41], title: "mock dependencies to isolate tests" },
              { loc: [0, 7], note: 'mock dependencies' },
              { loc: [16, 19], note: 'use the provide object literal' },
            ]}/>
        </Deck>
      </Spectacle>
    );
  }
}
