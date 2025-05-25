import Mustache from 'mustache'

import template from '../assets/page-template.html.mustache?raw'

// interface Button {
//     name: string
//     value: string
//     type: 'url' | 'copyable'
//     openInNewTab?: boolean
// }

// interface SiteConfig {
//     buttons: Button[]
//     // backgroundColor:
//     // primaryColor:
//     // borderColor:
//     // hoverColor:
//     // title
//     // subtitle
//     // avatar
//     // banner img
// }

const beautifyUrl = (url) => url.replace(/^https?\:\/\/(www.)?/, '')

const buttonToTemplateParams = ({ name, value, type, openInNewTab }) => ({
    name, value,
    isLink: type === 'url',
    openInNewTab: openInNewTab || false,
    displayValue: type === 'url' ? beautifyUrl(value) : value,
    valueLength: value.length,
})

export function render (siteConfig) {
    // meta.title
    // meta.description
    
    // css.body_background
    // css.body_color
    // css.accent_color
    // css.on_accent_color
    // css.copied_color
    // css.link_color

    // content.title
    // content.subtitle
    // content.body

    // buttons: []
    //      name
    //      value
    //      displayValue
    //      valueLength
    //      isLink
    //      openInNewTab
    
    const { buttons, ...rest } = siteConfig
    return Mustache.render(template, {
        buttons: buttons.map(buttonToTemplateParams),
        ...rest
    })
}
