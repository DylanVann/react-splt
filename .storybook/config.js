import { configure } from '@storybook/react'

function loadStories() {
    require('./main.stories')
}

configure(loadStories, module)
