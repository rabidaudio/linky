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
//     meta: Metadata
// }

// interface Colors {
//     background: string
//     body: string
//     accent: string
//     onAccent: string
//     copied?: string // defualt accent
//     link?: string // defualt accent
// }

// interface Metadata {
//     title?: string // defaults to site title
//     description?: string //defaults to subtitle   
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
    // html.head
    // html.css
    // html.footer

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
    // img.avatar // base64
    // img.splash // base64

    // buttons: []
    //      name
    //      value
    //      displayValue
    //      valueLength
    //      isLink
    //      openInNewTab
    
    const { buttons, meta, colors, content, ...rest } = siteConfig
    return Mustache.render(template, {
        buttons: buttons.map(buttonToTemplateParams),
        meta: {
            title: content.title,
            description: content.body || content.subtitle,
            ...meta
        },
        css: {
            body_background: colors.background || '#fff',
            body_color: colors.body || '#000',
            accent_color: colors.accent || 'blue',
            on_accent_color: colors.onAccent || '#000',
            copied_color: colors.copied || colors.accent || 'blue',
            link_color: colors.link || colors.accent || 'blue',
        },
        content,
        ...rest
    })
}
