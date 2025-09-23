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




    // Banner Section
    defineField({
      name: 'banner',
      title: 'Banner Section',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
          validation: Rule => Rule.required()
        }),
        defineField({
          name: 'description',
          title: 'Description',
          type: 'text',
          validation: Rule => Rule.required()
        }),
        
        defineField({
          name: 'image',
          title: 'Banner Image',
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
          name: 'floatingElements',
          title: 'Floating Elements',
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
                    { title: 'Car', value: 'FaCar' },
                    { title: 'Star', value: 'FaStar' },
                    { title: 'Shield', value: 'FaShield' },
                    { title: 'Clock', value: 'FaClock' },
                    { title: 'Money', value: 'FaMoneyBill' },
                    { title: 'Location', value: 'FaMapMarker' },
                    { title: 'Speed', value: 'FaTachometerAlt' },
                    { title: 'Key', value: 'FaKey' }
                  ]
                }
              }),
              defineField({
                name: 'title',
                title: 'Title',
                type: 'string'
              }),
              defineField({
                name: 'value',
                title: 'Value',
                type: 'string'
              }),
              defineField({
                name: 'color',
                title: 'Color',
                type: 'string'
              }),
              defineField({
                name: 'position',
                title: 'Position',
                type: 'string',
                options: {
                  list: [
                    {title: 'Top Left', value: 'topLeft'},
                    {title: 'Top Right', value: 'topRight'},
                    {title: 'Bottom Left', value: 'bottomLeft'},
                    {title: 'Bottom Right', value: 'bottomRight'}
                  ]
                }
              })
            ]
          }]
        })
      ]
    })
  ]
})
