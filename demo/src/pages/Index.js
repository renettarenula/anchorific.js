// src/pages/home.js
import React from "react";
import Layout from "../components/Layout";
import styled from "@emotion/styled";
import Heart from "~/src/assets/Heart.svg";
import Thai from "~/src/assets/Thai.svg";
import Malaysia from "~/src/assets/Malaysia.svg";

const Content = styled.div`
  margin: auto;
  max-width: 900px;
  color: #fff;
  padding: 0 1.2rem;
`;

const Header = styled.h1`
  font-weight: bold;
  font-size: 1.8rem;
  letter-spacing: 2px;
  margin-bottom: 20px;
`;

const H2 = styled.h2`
  font-weight: bold;
  font-size: 1.6rem;
  letter-spacing: 2px;
  margin-bottom: 20px;
`;

const H3 = styled.h3`
  font-weight: bold;
  font-size: 1.3rem;
  letter-spacing: 2px;
  margin-bottom: 20px;
`;

const P = styled.p`
  line-height: 1.5;
  margin-bottom: 20px;
  font-weight: 300;

  &.strong {
    font-weight: bold;
  }
`;

const A = styled.a`
  color: #42a7ff;

  &:hover {
    color: #7cb8ec;
  }
`;

const Footer = styled.div`
  border-top: 1px #02559c solid;
  padding-top: 10px;
  margin: 30px 0;
  margin-top: 50px;
  letter-spacing: 1px;
  line-height: 1.8;
  text-align: center;
`;

const SmallIcon = styled.i`
  display: inline-block;
  vertical-align: middle;
  padding: 0 3px;
`;

const Index = () => {
  return (
    <Layout>
      <Content>
        <Header>What is it?</Header>
        <P>
          Anchorific is a jQuery plugin that automatically generates anchored
          headings and nested navigations based on header tags.
        </P>
        <P>
          Checkout the navigation under the hamburger menu. Active state of
          navigation should change based on where you are on the page. The
          navigation is generated by Anchorific.
        </P>
        <Header>Installation</Header>
        <pre>
          <code className="language-bash">npm install --save anchorific</code>
        </pre>
        <P>
          For a guide on how to using jQuery plugins with npm, check out{" "}
          <A href="https://blog.npmjs.org/post/112064849860/using-jquery-plugins-with-npm">
            this blog by NPM.
          </A>
        </P>
        <P>You can also use CDN:</P>
        <pre>
          <code className="language-markup">
            &lt;script
            src=&quot;https://cdnjs.cloudflare.com/ajax/libs/anchorific/0.1.2/min/anchorific.min.js&quot;&gt;&lt;/script&gt;
          </code>
        </pre>
        <Header>Getting Started</Header>
        <H2>Basic Usage and Options</H2>
        <P>
          Use the selector where your headings are located under. And then just
          call the anchorific method.
        </P>
        <pre>
          <code className="language-js">$(".content").anchorific();</code>
        </pre>
        <P>
          You can call the plugin function with any selector you want as long as
          it adhere to the HTML structure mentioned above. Options available are
          as followed:
        </P>
        <pre>
          <code
            className="language-js"
            dangerouslySetInnerHTML={{
              __html: `$(".content").anchorific({
  navigation: ".anchorific", // position of navigation
  headers: "h1, h2, h3, h4, h5, h6", // headers that you wish to target
  speed: 200, // speed of sliding back to top
  anchorClass: "anchor", // class of anchor links
  anchorText: "#", // prepended or appended to anchor headings
  top: ".top", // back to top button or link class
  spy: true, // scroll spy
  position: "append", // position of anchor text
  spyOffset: 0, // specify heading offset for spy scrolling
});`,
            }}
          ></code>
        </pre>
        <P>
          Generating navigations, Scroll spy, and 'Back to top' functionality
          can be disable by assigning false value to the options.
        </P>
        <H3>Adding 'Back to Top' Button</H3>
        <P>
          Just add an element with class top. You can use other class names but
          it should be specified in the plugin options.
        </P>
        <pre>
          <code
            className="language-markup"
            dangerouslySetInnerHTML={{
              __html: `&lt;a href=&quot;#top&quot; class=&quot;top&quot;&gt;Scroll to top&lt;/a&gt;`,
            }}
          ></code>
        </pre>
        <P>
          The speed of the scrolling effect can be adjusted by specifying it in
          the options above.
        </P>

        <P className="strong">
          Note: remember to add display: none; to the .top styling. It should
          not be visible when the page first load.
        </P>

        <H2>HTML Structure</H2>
        <P>
          You should not skip a level when structuring header tags. H1 should be
          followed by H2, H2 should be followed by H3 and so on. Anchorific
          relies heavily on this particular structure when generating the anchor
          navigation.
        </P>
        <pre>
          <code
            className="language-markup"
            dangerouslySetInnerHTML={{
              __html: `&lt;h1&gt;The Lannisters&lt;/h1&gt;
&lt;h2&gt;Tywin Lanister&lt;/h2&gt;
&lt;h2&gt;Cersei Lannister&lt;/h2&gt;
&lt;h3&gt;Joffrey Baratheon&lt;/h3&gt;
&lt;h3&gt;Myrcella Baratheon&lt;/h3&gt;
&lt;h3&gt;Tommen Baratheon&lt;/h3&gt;
&lt;h2&gt;Jaime Lannister&lt;/h2&gt;
&lt;h2&gt;Tyrion Lannister&lt;/h2&gt;`,
            }}
          ></code>
        </pre>
        <P>
          Based on the HTML markup above, the plugin will generate nested
          navigations like this one:
        </P>
        <pre>
          <code
            className="language-markup"
            dangerouslySetInnerHTML={{
              __html: `&lt;ul&gt;
  &lt;li data-tag=&quot;1&quot;&gt;
    &lt;a href=&quot;#the-lannisters&quot;&gt;The Lannisters&lt;/a&gt;
    &lt;ul&gt;
      &lt;li data-tag=&quot;2&quot;&gt;&lt;a href=&quot;#tywin-lannister&quot;&gt;Tywin Lannister&lt;/a&gt;&lt;/li&gt;
      &lt;li data-tag=&quot;2&quot;&gt;
        &lt;a href=&quot;#cersei-lannister&quot;&gt;Cersei Lannister&lt;/a&gt;
        &lt;ul&gt;
          &lt;li data-tag=&quot;3&quot;&gt;
            &lt;a href=&quot;#joffrey-baratheon&quot;&gt;Joffrey Baratheon&lt;/a&gt;
          &lt;/li&gt;
          &lt;li data-tag=&quot;3&quot;&gt;
            &lt;a href=&quot;#myrcella-baratheon&quot;&gt;Myrcella Baratheon&lt;/a&gt;
          &lt;/li&gt;
          &lt;li data-tag=&quot;3&quot;&gt;&lt;a href=&quot;#tommen-baratheon&quot;&gt;Tommen Baratheon&lt;/a&gt;&lt;/li&gt;
        &lt;/ul&gt;
      &lt;/li&gt;
      &lt;li data-tag=&quot;2&quot;&gt;&lt;a href=&quot;#jaime-lannister&quot;&gt;Jaime Lannister&lt;/a&gt;&lt;/li&gt;
      &lt;li data-tag=&quot;2&quot;&gt;&lt;a href=&quot;#tyrion-lannister&quot;&gt;Tyrion Lannister&lt;/a&gt;&lt;/li&gt;
    &lt;/ul&gt;
  &lt;/li&gt;
&lt;/ul&gt;`,
            }}
          ></code>
        </pre>
        <P>...and it will generate anchored headings like this one:</P>
        <pre>
          <code
            className="language-markup"
            dangerouslySetInnerHTML={{
              __html: `&lt;h1&gt;Tywin Lannister&lt;/h1&gt;
&lt;!-- This would be turn to --&gt;
&lt;h1 id=&quot;tywin-lannister&quot;&gt;
  Tywin Lannister &lt;a href=&quot;#tywin-lannister&quot; class=&quot;anchor&quot;&gt;#&lt;/a&gt;
&lt;/h1&gt;`,
            }}
          ></code>
        </pre>
        <H3>Existing ID</H3>
        <P>Any existing ID will be preserved by the plugin:</P>
        <pre>
          <code
            className="language-markup"
            dangerouslySetInnerHTML={{
              __html: `&lt;h3 id=&quot;what-if-I-already-have-an-id&quot;&gt;What about existing ID?&lt;/h3&gt;
&lt;!-- This would be turn to --&gt;
&lt;h3 id=&quot;what-if-I-already-have-an-id&quot;&gt;
  What about existing ID?&lt;a href=&quot;#what-if-I-already-have-an-id&quot; class=&quot;anchor&quot;&gt;#&lt;/a&gt;
&lt;/h3&gt;`,
            }}
          ></code>
        </pre>
        <H3>Generate Navigation</H3>
        <P>
          Include a div or a nav section where you want the unordered list of
          anchor navigation to be appended at:
        </P>
        <pre>
          <code
            className="language-markup"
            dangerouslySetInnerHTML={{
              __html: `&lt;nav class=&quot;anchorific&quot;&gt;&lt;/nav&gt;`,
            }}
          ></code>
        </pre>
        <P>
          By default, the plugin will append the unordered list under an element
          with class called anchorific. If you wish to use another class name,
          you need to specify it in the plugin's option.
        </P>
        <H2>CSS</H2>
        <P>
          The nested navigation can be styled easily. Below are the selectors
          you can use in order to style the generated navigation.
        </P>
        <pre>
          <code
            className="language-css"
            dangerouslySetInnerHTML={{
              __html: `.anchorific {}
.anchorific ul {}
.anchorific ul li a {}
.anchorific li ul {}
/* active class is generated by the scrollspy */ .anchorific
li.active > a {}
.anchorific li.active > ul {}`,
            }}
          ></code>
        </pre>
        <P>
          You can use the CSS provided with the library and override the
          styling.
        </P>
      </Content>
      <Content>
        <Footer>
          Made with{" "}
          <SmallIcon>
            <Heart width="20px" height="20px" alt="love" />
          </SmallIcon>{" "}
          in{" "}
          <SmallIcon>
            {" "}
            <Thai width="20px" alt="Thailand" />
          </SmallIcon>{" "}
          and{" "}
          <SmallIcon>
            {" "}
            <Malaysia width="20px" alt="Malaysia" />
          </SmallIcon>{" "}
          by <A href="https://aysha.me">Aysha Anggraini</A> while vacationing
          and looking for a job in 2013 as a fresh graduate.
        </Footer>
      </Content>
    </Layout>
  );
};

export default Index;
