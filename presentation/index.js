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
  markdown: require("../assets/markdown.png"),
  poll: require('../assets/ng-test-twitter-poll.png'),
  chromeTest: require('../assets/ng-test-chrome.png'),
  coverage: require('../assets/coverage.png'),
  coverageTerminal: require('../assets/coverage-terminal.png'),
  profile: require('../assets/profile.jpg'),
  wallaby: require('../assets/ngcli-wallaby.gif'),
  beach: require('../assets/kauai.jpg'),
  nyc: require('../assets/nyc.jpg'),
  computer: require('../assets/computer.png'),
  righton: require('../assets/righton.png'),
  heart: require('../assets/heart.png'),
  spaceship: require('../assets/spaceship.png'),
  nerdface: require('../assets/nerdface.png'),
  cool: require('../assets/cool.png'),
  spaceshipbg: require('../assets/spaceship.jpg')
};

preloader(images);

const theme = createTheme({
  primary: "#2d2d2d",
  secondary: "white",
  tertiary: "#03A9FC",
  quartenary: "#CECECE"
}, {
  primary: "Yanone Kaffeesatz"
});

const terminal = {
  purple: '#d6bcfc',
  green: '#7ec699',
  yellow: '#f4f99d',
  cyan: '#9aedfe'
};

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>
          <Slide transition={["fade"]} bgImage={images.spaceshipbg.replace('/', '')} bgDarken={0.6}>
            <Text fit caps bold  textColor="secondary">
              Turbocharge Your 
            </Text>
            <Text fit caps bold textColor="secondary">
              Angular Testing Workflow
            </Text>
            <Layout style={{ "margin-top": "40px" }}>
              <div>
                <Image style={{borderRadius: "50%", textAlign: "center", marginTop: "40px" }} src={images.profile.replace('/', '')} height="150px" />
              </div>
              <div style={{ "text-align": "left", "padding-left": "10px" }}> 
                <Text margin={10} textSize="1.2em" textColor="secondary">Victor Mejia</Text>
                <Text margin={10} textSize="1.2em" textColor="secondary">Lead Instructor @ Orange County Code School</Text>
                <Text margin={10} textSize="1.2em" textColor="secondary">
                  <a href="https://twitter.com/_victormejia" style={{ color: 'white', textDecoration: 'none' }}>@_victormejia</a>
                </Text>
                <Text margin={10} textSize="1.2em" textColor="secondary">
                  <a href="https://ngtest-turbo.firebaseapp.com" style={{ color: 'white', textDecoration: 'none' }}>ngtest-turbo.firebaseapp.com</a>
                </Text>
              </div>
            </Layout>
          </Slide>
          <Slide transition={["fade"]} bgColor="secondary">
            <Image src={images.poll.replace('/', '')} margin="0px auto 40px" height="500px" />
          </Slide>
          <Slide transition={["fade"]}>
            <Heading size={1} fit textColor="secondary">
              Time to nerd out &nbsp;
             <Image src={images.spaceship.replace('/', '')}  style={{ "vertical-align": "middle", "margin-top": "2px" }} height="15px" />
            </Heading>
          </Slide>
          <Slide transition={["fade"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="secondary">
              Setup & Configuration
            </Heading>
          </Slide>
          <Slide transition={["fade"]}>
            <Heading size={1} fit textColor="secondary">
              @angular/cli === &nbsp;
             <Image src={images.cool.replace('/', '')}  style={{ "vertical-align": "middle", "margin-top": "2px" }} height="15px" />
            </Heading>
          </Slide>
          <Slide transition={["fade"]} bgColor="primary">
            <Terminal title="" output={[
              "▶ ng new ng-shop",
              <div>
                <div style={{ color: "#5af78e"}}>Installing packages for tooling via npm. </div>
                <div style={{ color: "#5af78e"}}>Installed packages for tooling via npm.</div>
                <div style={{ color: "#5af78e"}}>Project 'ng-shop' successfully created.</div>
              </div>]} />
          </Slide>
          <Slide transition={["fade"]} bgColor="primary">
            <Terminal title="" output={[
                "Projects/code/ng-shop  master ✗",
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
          <Slide transition={["fade"]} bgColor="primary">
            <Terminal title="" output={[
              <div>
                <span style={{ color: terminal.purple }}>Projects/code/ng-shop</span>
                <span style={{ color: terminal.cyan }}> master </span>
                <span style={{ color: terminal.yellow }}>✗</span>
              </div>,
              "▶ ng test --single-run --code-coverage",
              "▶ cd coverage"
              ]} />
          </Slide>
          <Slide transition={["fade"]} bgColor="secondary" bgImage={images.coverage.replace("/", "")}>
          </Slide>
          <Slide transition={["fade"]} bgColor="primary">
            <Text textSize="1.5em" margin="20px" bold textColor="secondary">install karma-spec-reporter</Text>
            <Terminal title="" output={[
              <div>
                <span style={{ color: terminal.purple }}>Projects/code/ng-shop</span>
                <span style={{ color: terminal.cyan }}> master </span>
                <span style={{ color: terminal.yellow }}>✗</span>
              </div>,
              "▶ npm install karma-spec-reporter --save-dev",
              ]} />
          </Slide>
          <CodeSlide
            transition={["fade"]}
            lang="js"
            code={require("raw-loader!../assets/examples/karma.conf.summary.example")}
            ranges={[
              { loc: [0, 43], title: "Make terminal reporting pretty" },
              { loc: [10, 11], note: 'add spec reporter to plugins' },
              { loc: [31, 34], note: 'change reporter to "spec"' },
              { loc: [25, 26], note: 'add "text-summary" for istanbul reporter' }
            ]}/>
          <Slide transition={["fade"]} bgColor="secondary" bgImage={images.coverageTerminal.replace("/", "")}>
          </Slide>
          <Slide transition={["fade"]}>
            <Heading size={1} textColor="secondary" caps>Reference</Heading>
            <Link textColor="secondary" textSize="1.5em" href="https://github.com/victormejia/ngconf2017-test-demo/commit/19ac83fe9bc598f80e84afbb7fc6afc7bce96604">
              https://github.com/victormejia/ngconf2017-test-demo/commit/19ac83fe9bc598f80e84afbb7fc6afc7bce96604
            </Link>
          </Slide>
          <Slide transition={["fade"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="secondary">
              Feedback loop for results
            </Heading>
          </Slide>
          <Slide transition={["fade"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="secondary">
              wallaby.js &nbsp; is &nbsp;
              <Image src={images.righton.replace('/', '')}  style={{ "vertical-align": "middle", "margin-top": "2px" }} height="15px" />
            </Heading>
          </Slide>
          <Slide transition={["fade"]} bgColor="secondary" bgImage={images.wallaby.replace("/", "")}/>
          <Slide transition={["fade"]} bgColor="primary">
            <Heading size={1} textColor="secondary" caps>Reference</Heading>
            <List>
              <ListItem>
                <a style={{ color: 'white', textDecoration: 'none' }} href="https://github.com/wallabyjs/ngCliWebpackSample">https://github.com/wallabyjs/ngCliWebpackSample</a>
              </ListItem>
              <ListItem>
                <a style={{ color: 'white', textDecoration: 'none' }} href="https://github.com/victormejia/ngconf2017-test-demo/commit/7684a23be07ecae2888bc82459f2f9cc6a8355bd">https://github.com/victormejia/ngconf2017-test-demo/commit/7684a23be07ecae2888bc82459f2f9cc6a8355bd</a>
              </ListItem>
            </List>
          </Slide>
          <Slide transition={["fade"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="secondary">
              TestBed API
            </Heading>
          </Slide>
          <CodeSlide
              transition={["fade"]}
              lang="js"
              code={require("raw-loader!../assets/examples/component-test.example")}
              ranges={[
                { loc: [10, 19], note: "Configure TestBed module (NgModule-like)" },
                { loc: [11, 12], note: "Components in test" },
                { loc: [5, 8], note: "Obtain handle on 3 important objects" },
                { loc: [23, 24], note: "Returns a fixture for debugging and testing a component" },
                { loc: [24, 25], note: "Returns the component instance" },
                { loc: [25, 26], note: "Returns the debug element associated with this component" },
                { loc: [43, 50], note: "Change component's properties/inputs" },
                { loc: [51, 52], note: "Trigger a change detection cycle for the component" },
                { loc: [53, 54], note: "Use the debug element to test against your templates" },
                { loc: [12, 18], note: "TestBed allows you to stub injected dependencies" },
            ]}/>
          <Slide transition={["fade"]} bgColor="primary">
            <Heading size={1} textColor="secondary" caps>Reference</Heading>
            <List>
              <ListItem>
                <a style={{ color: 'white', textDecoration: 'none' }} href="https://angular.io/docs/ts/latest/guide/testing.html">https://angular.io/docs/ts/latest/guide/testing.html</a>
              </ListItem>
              <ListItem>
                <a style={{ color: 'white', textDecoration: 'none' }} href="https://medium.com/google-developer-experts/angular-2-testing-guide-a485b6cb1ef0">https://medium.com/google-developer-experts/angular-2-testing-guide-a485b6cb1ef0</a>
              </ListItem>
            </List>
          </Slide>  
          <Slide transition={["fade"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="secondary">
              Maintaining Tests
            </Heading>
          </Slide>
          <CodeSlide
              transition={["fade"]}
              lang="js"
              code={require("raw-loader!../assets/examples/component-test.example")}
              ranges={[
                { loc: [0, 58], title: "Organize tests!" },
                { loc: [4, 5], note: 'top-level "describe" for component' },
                { loc: [28, 31], note: 'nested "describe" for functions on component' },
                { loc: [34, 35], note: 'nested "describe" for functions on component' },
                { loc: [40, 41], note: '"describe" for component interaction & functionality' }
            ]}/>
          <CodeSlide
              transition={["fade"]}
              lang="js"
              code={require("raw-loader!../assets/examples/component-test.example")}
              ranges={[
                { loc: [41, 42], title: "a test should tell a story" },
                { loc: [43, 50], note: 'Arrange' },
                { loc: [51, 52], note: 'Act' },
                { loc: [53, 54], note: 'Assert' },
                { loc: [53, 54], note: 'don\'t follow DRY "to a tee"' },
            ]}/>
          <CodeSlide
            transition={["fade"]}
            lang="js"
            code={require("raw-loader!../assets/examples/dependencies.example")}
            ranges={[
              { loc: [0, 41], title: "mock dependencies to isolate tests" },
              { loc: [0, 10], note: 'mock dependencies' },
              { loc: [20, 23], note: 'use the provide object literal' },
            ]}/>
            <CodeSlide
              transition={["fade"]}
              lang="js"
              code={require("raw-loader!../assets/examples/karma.conf.threshold.example")}
              ranges={[
                { loc: [0, 64], title: "enforce coverage thresholds" },
                { loc: [0, 64], note: "npm i --save-dev karma-istanbul-threshold" },
                { loc: [9, 10], note: 'add to plugins' },
                { loc: [26, 27], note: 'add json reporter' },
                { loc: [50, 52], note: 'add istanbul-threshold reporter' },
                { loc: [32, 47], note: 'add global and individual file thresholds' }
            ]}/>
            <Slide transition={["fade"]} bgColor="primary">
              <Heading size={1} textColor="secondary" caps>Reference</Heading>
              <List>
                <ListItem>
                  <a style={{ color: 'white', textDecoration: 'none' }} href="https://github.com/angular/angular-cli/issues/883#issuecomment-283590430">https://github.com/angular/angular-cli/issues/883#issuecomment-283590430</a>
                </ListItem>
                <ListItem>
                  <a style={{ color: 'white', textDecoration: 'none' }} href="https://github.com/victormejia/ngconf2017-test-demo/commit/abe56faa1418bfda3396296783617b3319579a0a">https://github.com/victormejia/ngconf2017-test-demo/commit/abe56faa1418bfda3396296783617b3319579a0a</a>
                </ListItem>
              </List>
            </Slide> 
            <CodeSlide
              transition={["fade"]}
              lang="js"
              code={require("raw-loader!../assets/examples/package.json.example")}
              ranges={[
                { loc: [0, 51], title: "prevent bad commits with husky" },
                { loc: [0, 51], note: "npm i --save-dev husky" },
                { loc: [11, 13], note: 'add precommit and prepush hooks' }
            ]}/>
          <Slide transition={["fade"]}>
            <Heading size={1} fit textColor="secondary">
              Thanks! &nbsp;
             <Image src={images.nerdface.replace('/', '')}  style={{ "vertical-align": "middle", "margin-top": "2px" }} height="15px" />
            </Heading>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
