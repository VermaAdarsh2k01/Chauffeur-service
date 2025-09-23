import {defineType, defineField} from 'sanity'

export const homePage = defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [
    // Basic SEO and Page Info
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      validation: Rule => Rule.required(),
      initialValue: 'Home'
    }),

    // Hero Section
    defineField({
      name: 'hero',
      title: 'Hero Section',
      type: 'object',
      fields: [
        defineField({
          name: 'mainHeading',
          title: 'Main Heading',
          type: 'array',
          of: [{ type: 'string' }],
          validation: Rule => Rule.required().min(1).max(4),
          description: 'Each line of the main heading (e.g., ["Premium", "Chauffeur Driven", "Car Services"])',
          initialValue: ['Premium', 'Chauffeur Driven', 'Car Services']
        }),
        defineField({
          name: 'description',
          title: 'Hero Description',
          type: 'text',
          validation: Rule => Rule.required(),
          initialValue: 'Experience luxury travel with our professional chauffeur services. Reliable, comfortable, and tailored to your needs.'
        }),
        defineField({
          name: 'heroImage',
          title: 'Hero Image',
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
              validation: Rule => Rule.required(),
              initialValue: 'Premium Porsche Car'
            })
          ]
        }),
        defineField({
          name: 'partnerLogos',
          title: 'Partner Logos',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              defineField({
                name: 'src',
                title: 'Logo Image',
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
          }],
          validation: Rule => Rule.min(1).max(10),
          description: 'Logos that will scroll in the marquee'
        }),
        defineField({
          name: 'backgroundPatterns',
          title: 'Background Patterns',
          type: 'object',
          fields: [
            defineField({
              name: 'patternImage',
              title: 'Pattern Background Image',
              type: 'object',
              fields: [
                defineField({
                  name: 'src',
                  title: 'Image Source',
                  type: 'image',
                  description: 'Background pattern image (defaults to /patternBg.png if not provided)'
                }),
                defineField({
                  name: 'alt',
                  title: 'Alt Text',
                  type: 'string'
                })
              ]
            }),
            defineField({
              name: 'showGradients',
              title: 'Show Gradient Effects',
              type: 'boolean',
              initialValue: true,
              description: 'Toggle gradient background effects'
            })
          ]
        })
      ]
    }),

    // Vehicle Fleet Section
    defineField({
      name: 'vehicleFleet',
      title: 'Vehicle Fleet Section',
      type: 'object',
      fields: [
        defineField({
          name: 'subtitle',
          title: 'Section Subtitle',
          type: 'string',
          validation: Rule => Rule.required(),
          initialValue: 'ONLY THE BEST CARS'
        }),
        defineField({
          name: 'sectionTitle',
          title: 'Section Title',
          type: 'string',
          validation: Rule => Rule.required(),
          initialValue: 'Our Vehicle Fleet'
        }),
        defineField({
          name: 'sectionDescription',
          title: 'Section Description',
          type: 'text',
          validation: Rule => Rule.required(),
          initialValue: 'We provide our customers with the most incredible driving emotions. That\'s why we have only world-class cars in our fleet.'
        }),
        defineField({
          name: 'vehicles',
          title: 'Vehicles',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              defineField({
                name: 'name',
                title: 'Vehicle Name',
                type: 'string',
                validation: Rule => Rule.required()
              }),
              defineField({
                name: 'image',
                title: 'Vehicle Image',
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
                name: 'description',
                title: 'Vehicle Description',
                type: 'text',
                validation: Rule => Rule.required()
              }),
              defineField({
                name: 'buttonText',
                title: 'Button Text',
                type: 'string',
                initialValue: 'Book Now'
              }),
              defineField({
                name: 'buttonLink',
                title: 'Button Link',
                type: 'url',
                description: 'URL where the button should redirect'
              })
            ]
          }],
          validation: Rule => Rule.min(1).max(10)
        })
      ]
    }),

    // Service Highlights Section
    defineField({
      name: 'serviceHighlights',
      title: 'Service Highlights Section',
      type: 'object',
      fields: [
        defineField({
          name: 'subtitle',
          title: 'Section Subtitle',
          type: 'string',
          validation: Rule => Rule.required(),
          initialValue: 'We Believe in Premium Experience'
        }),
        defineField({
          name: 'sectionTitle',
          title: 'Section Title',
          type: 'string',
          validation: Rule => Rule.required(),
          initialValue: 'We Believe in Premium Experience'
        }),
        defineField({
          name: 'highlights',
          title: 'Service Highlights',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              defineField({
                name: 'title',
                title: 'Highlight Title',
                type: 'string',
                validation: Rule => Rule.required()
              }),
              defineField({
                name: 'description',
                title: 'Highlight Description',
                type: 'text',
                validation: Rule => Rule.required()
              }),
              defineField({
                name: 'image',
                title: 'Highlight Image',
                type: 'object',
                fields: [
                  defineField({
                    name: 'src',
                    title: 'Image Source',
                    type: 'image'
                  }),
                  defineField({
                    name: 'alt',
                    title: 'Alt Text',
                    type: 'string'
                  })
                ]
              }),
              defineField({
                name: 'type',
                title: 'Highlight Type',
                type: 'string',
                options: {
                  list: [
                    { title: 'Image with Text', value: 'image' },
                    { title: 'Counter Stats', value: 'counter' },
                    { title: 'Icon Feature', value: 'icon' }
                  ]
                },
                validation: Rule => Rule.required()
              }),
              defineField({
                name: 'counterData',
                title: 'Counter Data',
                type: 'object',
                fields: [
                  defineField({
                    name: 'counter1',
                    title: 'First Counter',
                    type: 'object',
                    fields: [
                      defineField({
                        name: 'value',
                        title: 'Counter Value',
                        type: 'number',
                        validation: Rule => Rule.required()
                      }),
                      defineField({
                        name: 'label',
                        title: 'Counter Label',
                        type: 'string',
                        validation: Rule => Rule.required()
                      }),
                      defineField({
                        name: 'suffix',
                        title: 'Counter Suffix',
                        type: 'string',
                        initialValue: '+'
                      })
                    ]
                  }),
                  defineField({
                    name: 'counter2',
                    title: 'Second Counter',
                    type: 'object',
                    fields: [
                      defineField({
                        name: 'value',
                        title: 'Counter Value',
                        type: 'number',
                        validation: Rule => Rule.required()
                      }),
                      defineField({
                        name: 'label',
                        title: 'Counter Label',
                        type: 'string',
                        validation: Rule => Rule.required()
                      }),
                      defineField({
                        name: 'suffix',
                        title: 'Counter Suffix',
                        type: 'string',
                        initialValue: '+'
                      })
                    ]
                  })
                ],
                hidden: ({ parent }) => parent?.type !== 'counter'
              }),
              defineField({
                name: 'backgroundColor',
                title: 'Background Color',
                type: 'string',
                options: {
                  list: [
                    { title: 'Light Gray', value: 'bg-gray-200' },
                    { title: 'Dark Gray', value: 'bg-gray-800' },
                    { title: 'White', value: 'bg-white' }
                  ]
                },
                initialValue: 'bg-gray-200'
              })
            ]
          }],
          validation: Rule => Rule.min(1).max(6)
        })
      ]
    }),

    // Key Features Section (reusing from about.ts but with different context)
    defineField({
      name: 'keyFeatures',
      title: 'Key Features Section',
      type: 'object',
      fields: [
        defineField({
          name: 'subtitle',
          title: 'Section Subtitle',
          type: 'string',
          validation: Rule => Rule.required(),
          initialValue: 'Taking Care of Every Client'
        }),
        defineField({
          name: 'sectionTitle',
          title: 'Section Title',
          type: 'string',
          validation: Rule => Rule.required(),
          initialValue: 'Key Features'
        }),
        defineField({
          name: 'sectionDescription',
          title: 'Section Description',
          type: 'text',
          validation: Rule => Rule.required(),
          initialValue: 'We are all about our client\'s comfort and safety. That\'s why we provide the best service you can imagine.'
        }),
        defineField({
          name: 'features',
          title: 'Features List',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              defineField({
                name: 'icon',
                title: 'Feature Icon',
                type: 'string',
                options: {
                  list: [
                    { title: 'Clock', value: 'Clock' },
                    { title: 'Headphones', value: 'Headphones' },
                    { title: 'Sparkles', value: 'Sparkles' },
                    { title: 'Shield', value: 'Shield' },
                    { title: 'Car', value: 'Car' },
                    { title: 'Users', value: 'Users' },
                    { title: 'Award', value: 'Award' },
                    { title: 'Star', value: 'Star' }
                  ]
                },
                validation: Rule => Rule.required()
              }),
              defineField({
                name: 'title',
                title: 'Feature Title',
                type: 'string',
                validation: Rule => Rule.required()
              }),
              defineField({
                name: 'description',
                title: 'Feature Description',
                type: 'text',
                validation: Rule => Rule.required()
              })
            ]
          }],
          validation: Rule => Rule.min(1).max(8)
        })
      ]
    }),

    // Download CTA Section (reusing from about.ts and dynamicServicePage.ts)
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
