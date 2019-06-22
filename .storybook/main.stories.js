import React from 'react'
import { storiesOf } from '@storybook/react'
import Slider from '../src'
import '../src/index.css'

function BasicExample() {
    return (
        <Slider>
            {
                'Pane A - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut nibh iaculis, molestie eros non, bibendum nisi. Sed condimentum ligula rhoncus dolor ultricies, ac faucibus elit efficitur. Cras venenatis mi ex. Vivamus in lacus sem. Fusce nulla nibh, dignissim sit amet facilisis in, luctus vitae quam. Etiam sed risus vel nunc vulputate blandit ac porta sapien. Sed varius, sem ac suscipit aliquet, lacus ex scelerisque nibh, quis sollicitudin felis mauris in nibh. Nullam hendrerit semper egestas. Donec convallis, mauris eget eleifend sollicitudin, elit massa rutrum leo, vitae sagittis lacus justo sit amet neque. Fusce efficitur aliquam diam, sit amet elementum ligula finibus sit amet. Duis id malesuada magna, sed fermentum est. Cras ut urna metus.'
            }
            {
                'Pane B - Cras ut eleifend leo. Mauris ut odio ut velit egestas viverra. In aliquam nibh leo, sed consequat sapien dictum sed. Sed blandit volutpat tellus, eget blandit felis rutrum eu. Pellentesque ut malesuada mauris. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In imperdiet pretium dapibus. Donec venenatis consectetur tellus eget dignissim. Maecenas mattis dolor lorem, maximus iaculis metus vehicula sit amet. Praesent euismod felis vitae ante aliquet convallis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nam non cursus neque.'
            }
        </Slider>
    )
}

function ControlledExample() {
    const [width, setWidth] = React.useState(200)
    return (
        <Slider width={width} onDrag={setWidth}>
            {
                'Pane A - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut nibh iaculis, molestie eros non, bibendum nisi. Sed condimentum ligula rhoncus dolor ultricies, ac faucibus elit efficitur. Cras venenatis mi ex. Vivamus in lacus sem. Fusce nulla nibh, dignissim sit amet facilisis in, luctus vitae quam. Etiam sed risus vel nunc vulputate blandit ac porta sapien. Sed varius, sem ac suscipit aliquet, lacus ex scelerisque nibh, quis sollicitudin felis mauris in nibh. Nullam hendrerit semper egestas. Donec convallis, mauris eget eleifend sollicitudin, elit massa rutrum leo, vitae sagittis lacus justo sit amet neque. Fusce efficitur aliquam diam, sit amet elementum ligula finibus sit amet. Duis id malesuada magna, sed fermentum est. Cras ut urna metus.'
            }
            {
                'Pane B - Cras ut eleifend leo. Mauris ut odio ut velit egestas viverra. In aliquam nibh leo, sed consequat sapien dictum sed. Sed blandit volutpat tellus, eget blandit felis rutrum eu. Pellentesque ut malesuada mauris. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In imperdiet pretium dapibus. Donec venenatis consectetur tellus eget dignissim. Maecenas mattis dolor lorem, maximus iaculis metus vehicula sit amet. Praesent euismod felis vitae ante aliquet convallis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nam non cursus neque.'
            }
        </Slider>
    )
}

function VerticalExample() {
    return (
        <Slider direction='vertical'>
            {
                'Pane A - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut nibh iaculis, molestie eros non, bibendum nisi. Sed condimentum ligula rhoncus dolor ultricies, ac faucibus elit efficitur. Cras venenatis mi ex. Vivamus in lacus sem. Fusce nulla nibh, dignissim sit amet facilisis in, luctus vitae quam. Etiam sed risus vel nunc vulputate blandit ac porta sapien. Sed varius, sem ac suscipit aliquet, lacus ex scelerisque nibh, quis sollicitudin felis mauris in nibh. Nullam hendrerit semper egestas. Donec convallis, mauris eget eleifend sollicitudin, elit massa rutrum leo, vitae sagittis lacus justo sit amet neque. Fusce efficitur aliquam diam, sit amet elementum ligula finibus sit amet. Duis id malesuada magna, sed fermentum est. Cras ut urna metus.'
            }
            {
                'Pane B - Cras ut eleifend leo. Mauris ut odio ut velit egestas viverra. In aliquam nibh leo, sed consequat sapien dictum sed. Sed blandit volutpat tellus, eget blandit felis rutrum eu. Pellentesque ut malesuada mauris. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In imperdiet pretium dapibus. Donec venenatis consectetur tellus eget dignissim. Maecenas mattis dolor lorem, maximus iaculis metus vehicula sit amet. Praesent euismod felis vitae ante aliquet convallis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nam non cursus neque.'
            }
        </Slider>
    )
}

storiesOf('Splitterer', module)
    .add('Basic example.', () => <BasicExample />)
    .add('Vertical example.', () => <VerticalExample />)
    .add('Controlled example.', () => <ControlledExample />)
