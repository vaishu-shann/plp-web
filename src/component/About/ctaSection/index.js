import React from 'react';
import {Banner,HeadingTeam,Form,FormInput} from "./ctasection.element"
import { Button } from '../../../globalStyles';
function CTASection(props) {
    return (
        <Banner>
              <HeadingTeam>Join our exclusive membership to receive the latest news and trends</HeadingTeam>
              <Form>
          <FormInput name='email' type='email' placeholder='Your Email' />
          <br/>
          <Button fontBig>Subscribe</Button>
        </Form>
        </Banner>
    );
}

export default CTASection;