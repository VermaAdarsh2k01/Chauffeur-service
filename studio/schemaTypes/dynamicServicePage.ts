import {defineType, defineField} from 'sanity'

export const dynamicServicePage = defineType({
  name: 'dynamicServicePage',
  title: 'Dynamic Service Page',
  type: 'document',
  fields: [
    // Basic SEO and Page Info
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      description: 'The URL path for this service (e.g., "luxury-cars" for /services/luxury-cars)',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: Rule => Rule.required()
    }),

    // Service Hero Section
    defineField({
      name: 'serviceHero',
      title: 'Service Hero Section',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
          validation: Rule => Rule.required()
        }),
        defineField({
          name: 'subtitle',
          title: 'Subtitle',
          type: 'string',
          description: 'Optional subtitle text displayed above the title'
        }),
        defineField({
          name: 'description',
          title: 'Description',
          type: 'text',
          description: 'Optional description text displayed below the title'
        }),
        defineField({
          name: 'backgroundImage',
          title: 'Background Image',
          type: 'object',
          fields: [
            defineField({
              name: 'src',
              title: 'Image Source',
              type: 'image',
              description: 'Hero background image (defaults to /hero2.png if not provided)'
            }),
            defineField({
              name: 'alt',
              title: 'Alt Text',
              type: 'string',
              description: 'Alternative text for the hero image'
            })
          ]
        }),
        defineField({
          name: 'bookButtonText',
          title: 'Book Button Text',
          type: 'string',
          description: 'Text for the book now button',
          initialValue: 'Book Now'
        })
      ]
    }),

    // Service Features Section
    defineField({
      name: 'serviceFeatures',
      title: 'Service Features Section',
      type: 'object',
      fields: [
        defineField({
          name: 'sectionTitle',
          title: 'Section Title',
          type: 'string',
          description: 'Main title for the features section',
          initialValue: 'What We Offer in our Airport Package'
        }),
        defineField({
          name: 'features',
          title: 'Features',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              defineField({
                name: 'button',
                title: 'Tab Button Text',
                type: 'string',
                validation: Rule => Rule.required()
              }),
              defineField({
                name: 'title',
                title: 'Feature Title',
                type: 'string',
                validation: Rule => Rule.required()
              }),
              defineField({
                name: 'content',
                title: 'Feature Content',
                type: 'text',
                validation: Rule => Rule.required()
              }),
              defineField({
                name: 'image',
                title: 'Feature Image',
                type: 'object',
                fields: [
                  defineField({
                    name: 'src',
                    title: 'Image Source',
                    type: 'image',
                    validation: Rule => Rule.required()
                  }),
                  defineField({
                    name: 'alt',
                    title: 'Alt Text',
                    type: 'string',
                    validation: Rule => Rule.required()
                  })
                ]
              }),
              defineField({
                name: 'link',
                title: 'Feature Link',
                type: 'object',
                fields: [
                  defineField({
                    name: 'link',
                    title: 'URL',
                    type: 'url',
                    
                  }),
                  defineField({
                    name: 'label',
                    title: 'Link Label',
                    type: 'string',
                    validation: Rule => Rule.required()
                  })
                ]
              })
            ]
          }],
          validation: Rule => Rule.min(1)
        })
      ]
    }),

    // Service Cards Section
    defineField({
      name: 'serviceCards',
      title: 'Service Cards Section',
      type: 'object',
      fields: [
        defineField({
          name: 'data',
          title: 'Service Cards',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              defineField({
                name: 'heading',
                title: 'Card Heading',
                type: 'string',
                validation: Rule => Rule.required()
              }),
              defineField({
                name: 'description',
                title: 'Card Description',
                type: 'text',
                validation: Rule => Rule.required()
              }),
              defineField({
                name: 'featurePoints',
                title: 'Feature Points',
                type: 'array',
                of: [{
                  type: 'object',
                  fields: [
                    defineField({
                      name: 'text',
                      title: 'Feature Text',
                      type: 'string',
                      validation: Rule => Rule.required()
                    })
                  ]
                }],
                validation: Rule => Rule.min(1)
              }),
              defineField({
                name: 'ctaButton',
                title: 'CTA Button',
                type: 'object',
                fields: [
                  defineField({
                    name: 'text',
                    title: 'Button Text',
                    type: 'string',
                    validation: Rule => Rule.required()
                  }),
                  defineField({
                    name: 'link',
                    title: 'Button Link',
                    type: 'url',
                    
                  })
                ]
              }),
              defineField({
                name: 'image',
                title: 'Card Image',
                type: 'object',
                fields: [
                  defineField({
                    name: 'src',
                    title: 'Image Source',
                    type: 'image',
                    validation: Rule => Rule.required()
                  }),
                  defineField({
                    name: 'alt',
                    title: 'Alt Text',
                    type: 'string',
                    validation: Rule => Rule.required()
                  })
                ]
              }),
              defineField({
                name: 'metric',
                title: 'Metric Card',
                type: 'object',
                fields: [
                  defineField({
                    name: 'icon',
                    title: 'Icon',
                    type: 'string',
                    options: {
                      list: [
                        { title: 'Clock', value: 'Clock' },
                        { title: 'Star', value: 'Star' },
                        { title: 'Calendar', value: 'Calendar' },
                        { title: 'Check Circle', value: 'CheckCircle' },
                        { title: 'Trending Up', value: 'TrendingUp' },
                        { title: 'Users', value: 'Users' },
                        { title: 'Award', value: 'Award' },
                        { title: 'Shield', value: 'Shield' },
                        { title: 'Map Pin', value: 'MapPin' }
                      ]
                    },
                    validation: Rule => Rule.required()
                  }),
                  defineField({
                    name: 'label',
                    title: 'Metric Label',
                    type: 'string',
                    validation: Rule => Rule.required()
                  }),
                  defineField({
                    name: 'value',
                    title: 'Metric Value',
                    type: 'string',
                    validation: Rule => Rule.required()
                  }),
                  defineField({
                    name: 'colorScheme',
                    title: 'Color Scheme',
                    type: 'string',
                    options: {
                      list: [
                        { title: 'Green', value: 'green' },
                        { title: 'Blue', value: 'blue' },
                        { title: 'Purple', value: 'purple' },
                        { title: 'Orange', value: 'orange' },
                        { title: 'Yellow', value: 'yellow' }
                      ]
                    },
                    validation: Rule => Rule.required()
                  })
                ]
              })
            ]
          }],
          validation: Rule => Rule.min(1)
        })
      ]
    }),

    // Download CTA Section
    defineField({
      name: 'downloadCTA',
      title: 'Download CTA Section',
      type: 'object',
      fields: [
        defineField({
          name: 'backgroundImage',
          title: 'Background Image',
          type: 'object',
          fields: [
            defineField({
              name: 'src',
              title: 'Image Source',
              type: 'image',
              description: 'Background image for the CTA section (defaults to /cta.jpg if not provided)'
            }),
            defineField({
              name: 'alt',
              title: 'Alt Text',
              type: 'string',
              description: 'Alternative text for the background image'
            })
          ]
        }),
        defineField({
          name: 'heading',
          title: 'Main Heading',
          type: 'string',
          validation: Rule => Rule.required(),
          initialValue: 'Enjoy Your Journey with Us'
        }),
        defineField({
          name: 'description',
          title: 'Description',
          type: 'text',
          validation: Rule => Rule.required(),
          initialValue: 'Start your journey to explore the world of premium cars - that\'s exciting'
        }),
        defineField({
          name: 'ctaButton',
          title: 'CTA Button',
          type: 'object',
          fields: [
            defineField({
              name: 'text',
              title: 'Button Text',
              type: 'string',
              validation: Rule => Rule.required(),
              initialValue: 'Book Now'
            }),
            defineField({
              name: 'link',
              title: 'Button Link',
              type: 'url',
              description: 'URL where the button should redirect'
            })
          ]
        })
      ]
    })
  ]
})
