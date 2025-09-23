import {defineType, defineField} from 'sanity'

export const aboutPage = defineType({
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  fields: [
    // Basic SEO and Page Info
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      validation: Rule => Rule.required(),
      initialValue: 'About Us'
    }),

    // About Hero Section
    defineField({
      name: 'aboutHero',
      title: 'About Hero Section',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Main Title',
          type: 'string',
          validation: Rule => Rule.required(),
          initialValue: 'Your Comfort is Our Priority'
        }),
        defineField({
          name: 'description',
          title: 'Description',
          type: 'text',
          validation: Rule => Rule.required(),
          initialValue: 'At Car Rentals, we believe that renting a car should be effortless and empowering. Founded with a mission to simplify car rental management.'
        }),
        defineField({
          name: 'images',
          title: 'Hero Images',
          type: 'object',
          fields: [
            defineField({
              name: 'primaryImage',
              title: 'Primary Image (Left)',
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
                  initialValue: 'Team meeting in modern office space'
                })
              ]
            }),
            defineField({
              name: 'secondaryImage',
              title: 'Secondary Image (Right)',
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
                  initialValue: 'Customer service representative helping clients'
                })
              ]
            })
          ]
        })
      ]
    }),

    // Company Values Section
    defineField({
      name: 'companyValues',
      title: 'Company Values Section',
      type: 'object',
      fields: [
        defineField({
          name: 'sectionTitle',
          title: 'Section Title',
          type: 'string',
          validation: Rule => Rule.required(),
          initialValue: 'Our Values'
        }),
        defineField({
          name: 'sectionDescription',
          title: 'Section Description',
          type: 'text',
          validation: Rule => Rule.required(),
          initialValue: 'Here\'s a catchy tagline that supports the headline above while adding a little extra information.'
        }),
        defineField({
          name: 'values',
          title: 'Company Values',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              defineField({
                name: 'icon',
                title: 'Icon',
                type: 'string',
                options: {
                  list: [
                    { title: 'Clock', value: 'Clock' },
                    { title: 'Heart Handshake', value: 'HeartHandshake' },
                    { title: 'Users', value: 'Users' },
                    { title: 'Shield', value: 'Shield' },
                    { title: 'Star', value: 'Star' },
                    { title: 'Award', value: 'Award' },
                    { title: 'Lightbulb', value: 'Lightbulb' },
                    { title: 'Target', value: 'Target' }
                  ]
                },
                validation: Rule => Rule.required()
              }),
              defineField({
                name: 'title',
                title: 'Value Title',
                type: 'string',
                validation: Rule => Rule.required()
              }),
              defineField({
                name: 'description',
                title: 'Value Description',
                type: 'text',
                validation: Rule => Rule.required()
              })
            ]
          }],
          validation: Rule => Rule.min(1).max(6)
        })
      ]
    }),

    // Advantage Section
    defineField({
      name: 'advantage',
      title: 'Advantage Section',
      type: 'object',
      fields: [
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
              name: 'image',
              title: 'Column Image',
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
              name: 'statistic',
              title: 'Statistic Card',
              type: 'object',
              fields: [
                defineField({
                  name: 'value',
                  title: 'Statistic Value',
                  type: 'string',
                  validation: Rule => Rule.required(),
                  initialValue: '10K+'
                }),
                defineField({
                  name: 'label',
                  title: 'Statistic Label',
                  type: 'string',
                  validation: Rule => Rule.required(),
                  initialValue: 'Premium Rides Completed'
                }),
                defineField({
                  name: 'description',
                  title: 'Statistic Description',
                  type: 'text',
                  validation: Rule => Rule.required(),
                  initialValue: 'Experience luxury and comfort with our professional chauffeur service across the city.'
                })
              ]
            })
          ]
        }),
        defineField({
          name: 'middleColumn',
          title: 'Middle Column (Testimonial)',
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
              name: 'testimonial',
              title: 'Testimonial Content',
              type: 'object',
              fields: [
                defineField({
                  name: 'companyLogo',
                  title: 'Company Logo',
                  type: 'object',
                  fields: [
                    defineField({
                      name: 'src',
                      title: 'Logo Source',
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
                  name: 'companyName',
                  title: 'Company Name',
                  type: 'string',
                  validation: Rule => Rule.required(),
                  initialValue: 'JK Travels'
                }),
                defineField({
                  name: 'quote',
                  title: 'Testimonial Quote',
                  type: 'text',
                  validation: Rule => Rule.required(),
                  initialValue: 'We believe in giving our customers the premium experience they deserve.'
                }),
                defineField({
                  name: 'authorName',
                  title: 'Author Name',
                  type: 'string',
                  validation: Rule => Rule.required(),
                  initialValue: 'Jessica Lubahn'
                }),
                defineField({
                  name: 'authorTitle',
                  title: 'Author Title',
                  type: 'string',
                  validation: Rule => Rule.required(),
                  initialValue: 'JK Travels CEO'
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
              name: 'statistic',
              title: 'Statistic Card',
              type: 'object',
              fields: [
                defineField({
                  name: 'value',
                  title: 'Statistic Value',
                  type: 'string',
                  validation: Rule => Rule.required(),
                  initialValue: '100%'
                }),
                defineField({
                  name: 'label',
                  title: 'Statistic Label',
                  type: 'string',
                  validation: Rule => Rule.required(),
                  initialValue: 'On-Time Arrivals'
                }),
                defineField({
                  name: 'description',
                  title: 'Statistic Description',
                  type: 'text',
                  validation: Rule => Rule.required(),
                  initialValue: 'Our professional chauffeurs ensure punctual service with real-time tracking and route optimization.'
                })
              ]
            }),
            defineField({
              name: 'image',
              title: 'Column Image',
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
            })
          ]
        })
      ]
    }),

    // Key Features Section
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

    // Download CTA Section (reusing from dynamicServicePage)
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
