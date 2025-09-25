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
          initialValue: 'Experience the Elite Drive Advantage'
        }),
        defineField({
          name: 'leftColumn',
          title: 'Left Column',
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Column Title',
              type: 'string',
              validation: Rule => Rule.required(),
              initialValue: 'Luxury Fleet'
            }),
            defineField({
              name: 'description',
              title: 'Column Description',
              type: 'text',
              validation: Rule => Rule.required(),
              initialValue: 'Experience the epitome of luxury with our premium collection of high-end vehicles, from sleek sports cars to elegant sedans.'
            }),
            defineField({
              name: 'image',
              title: 'Column Image',
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
            })
          ]
        }),
        defineField({
          name: 'middleColumn',
          title: 'Middle Column (Two Rows)',
          type: 'object',
          fields: [
            defineField({
              name: 'topRow',
              title: 'Top Row Content',
              type: 'object',
              fields: [
                defineField({
                  name: 'title',
                  title: 'Service Title',
                  type: 'string',
                  validation: Rule => Rule.required(),
                  initialValue: '24/7 Support'
                }),
                defineField({
                  name: 'description',
                  title: 'Service Description',
                  type: 'text',
                  validation: Rule => Rule.required(),
                  initialValue: 'Round-the-clock assistance for all your rental needs, including roadside support and concierge services.'
                }),
                defineField({
                  name: 'image',
                  title: 'Service Image (Optional)',
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
                })
              ]
            }),
            defineField({
              name: 'bottomRow',
              title: 'Bottom Row Content',
              type: 'object',
              fields: [
                defineField({
                  name: 'title',
                  title: 'Service Title',
                  type: 'string',
                  validation: Rule => Rule.required(),
                  initialValue: 'Verified Expert Drivers'
                }),
                defineField({
                  name: 'description',
                  title: 'Service Description',
                  type: 'text',
                  validation: Rule => Rule.required(),
                  initialValue: 'Experienced drivers with 10+ years on road and complete police verification, ensuring your safety at every turn.'
                }),
                defineField({
                  name: 'statistics',
                  title: 'Statistics',
                  type: 'object',
                  fields: [
                    defineField({
                      name: 'leftStat',
                      title: 'Left Statistic',
                      type: 'object',
                      fields: [
                        defineField({
                          name: 'value',
                          title: 'Statistic Value',
                          type: 'string',
                          validation: Rule => Rule.required(),
                          initialValue: '10+'
                        }),
                        defineField({
                          name: 'label',
                          title: 'Statistic Label',
                          type: 'string',
                          validation: Rule => Rule.required(),
                          initialValue: 'Years Experience'
                        })
                      ]
                    }),
                    defineField({
                      name: 'rightStat',
                      title: 'Right Statistic',
                      type: 'object',
                      fields: [
                        defineField({
                          name: 'value',
                          title: 'Statistic Value',
                          type: 'string',
                          validation: Rule => Rule.required(),
                          initialValue: '100+'
                        }),
                        defineField({
                          name: 'label',
                          title: 'Statistic Label',
                          type: 'string',
                          validation: Rule => Rule.required(),
                          initialValue: 'Verified Drivers'
                        })
                      ]
                    })
                  ]
                })
              ]
            })
          ]
        }),
        defineField({
          name: 'rightColumn',
          title: 'Right Column',
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Column Title',
              type: 'string',
              validation: Rule => Rule.required(),
              initialValue: 'No Language Barrier'
            }),
            defineField({
              name: 'description',
              title: 'Column Description',
              type: 'text',
              validation: Rule => Rule.required(),
              initialValue: 'Our chauffeurs and staff are fluent in English, Hindi, Marathi, Telugu, and Tamil, ensuring smooth communication throughout your journey.'
            }),
            defineField({
              name: 'image',
              title: 'Column Image',
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
            })
          ]
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
                    { title: 'Shield', value: 'Shield' }
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

    // FAQ Section
    defineField({
      name: 'faq',
      title: 'FAQ Section',
      type: 'object',
      fields: [
        defineField({
          name: 'sectionTitle',
          title: 'Section Title',
          type: 'string',
          validation: Rule => Rule.required(),
          initialValue: 'Frequently Asked Questions'
        }),
        defineField({
          name: 'sectionSubtitle',
          title: 'Section Subtitle',
          type: 'text',
          validation: Rule => Rule.required(),
          initialValue: 'Find answers to common questions about our chauffeur services'
        }),
        defineField({
          name: 'faqs',
          title: 'FAQ Items',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              defineField({
                name: 'id',
                title: 'FAQ ID',
                type: 'string',
                validation: Rule => Rule.required(),
                description: 'Unique identifier for this FAQ item'
              }),
              defineField({
                name: 'question',
                title: 'Question',
                type: 'string',
                validation: Rule => Rule.required()
              }),
              defineField({
                name: 'answer',
                title: 'Answer',
                type: 'text',
                validation: Rule => Rule.required()
              })
            ],
            preview: {
              select: {
                title: 'question',
                subtitle: 'answer'
              },
              prepare(selection) {
                const { title, subtitle } = selection
                return {
                  title: title,
                  subtitle: subtitle ? `${subtitle.substring(0, 50)}...` : ''
                }
              }
            }
          }],
          validation: Rule => Rule.min(1).max(20)
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
