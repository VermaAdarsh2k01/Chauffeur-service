import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'contact',
  title: 'Contact Information',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      initialValue: 'Contact Information',
    }),
    defineField({
      name: 'contactDetails',
      title: 'Contact Details',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'contactDetail',
          title: 'Contact Detail',
          fields: [
            defineField({
              name: 'iconName',
              title: 'Icon Name',
              type: 'string',
              description: 'Icon name from Lucide React (e.g., phone, mail, mapPin, clock)',
              validation: Rule => Rule.required(),
            }),
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
              validation: Rule => Rule.required(),
            }),
            defineField({
              name: 'info',
              title: 'Main Information',
              type: 'string',
              validation: Rule => Rule.required(),
            }),
            defineField({
              name: 'subInfo',
              title: 'Additional Information',
              type: 'string',
            }),
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'info',
              icon: 'iconName',
            },
            prepare(selection) {
              const { title, subtitle, icon } = selection
              return {
                title: title,
                subtitle: subtitle,
                media: () => `📞`, // You can customize this based on iconName
              }
            },
          },
        },
      ],
      validation: Rule => Rule.required().min(1),
    }),
    defineField({
      name: 'whyChooseUs',
      title: 'Why Choose Us Section',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Section Title',
          type: 'string',
          initialValue: 'Why Choose JK Travels?',
        }),
        defineField({
          name: 'features',
          title: 'Features',
          type: 'array',
          of: [
            {
              type: 'object',
              name: 'feature',
              title: 'Feature',
              fields: [
                defineField({
                  name: 'iconName',
                  title: 'Icon Name',
                  type: 'string',
                  description: 'Icon name from Lucide React (e.g., car, shield, award, users)',
                }),
                defineField({
                  name: 'title',
                  title: 'Feature Title',
                  type: 'string',
                  validation: Rule => Rule.required(),
                }),
                defineField({
                  name: 'description',
                  title: 'Feature Description',
                  type: 'text',
                  validation: Rule => Rule.required(),
                }),
              ],
              preview: {
                select: {
                  title: 'title',
                  subtitle: 'description',
                },
              },
            },
          ],
        }),
      ],
    }),
    defineField({
      name: 'locationAndSocial',
      title: 'Location & Social Media',
      type: 'object',
      fields: [
        defineField({
          name: 'sectionTitle',
          title: 'Section Title',
          type: 'string',
          initialValue: 'Visit & Follow Us',
        }),
        defineField({
          name: 'location',
          title: 'Location Details',
          type: 'object',
          fields: [
            defineField({
              name: 'address',
              title: 'Street Address',
              type: 'string',
              validation: Rule => Rule.required(),
            }),
            defineField({
              name: 'city',
              title: 'City, State ZIP',
              type: 'string',
              validation: Rule => Rule.required(),
            }),
            defineField({
              name: 'mapsUrl',
              title: 'Google Maps URL',
              type: 'url',
              description: 'Link to Google Maps location',
            }),
          ],
        }),
        defineField({
          name: 'socialMediaText',
          title: 'Social Media Text',
          type: 'string',
          initialValue: 'Stay connected with us',
        }),
        defineField({
          name: 'socialLinks',
          title: 'Social Media Links',
          type: 'array',
          of: [
            {
              type: 'object',
              name: 'socialLink',
              title: 'Social Link',
              fields: [
                defineField({
                  name: 'platform',
                  title: 'Platform Name',
                  type: 'string',
                  options: {
                    list: [
                      { title: 'Facebook', value: 'facebook' },
                      { title: 'Twitter', value: 'twitter' },
                      { title: 'Instagram', value: 'instagram' },
                      { title: 'LinkedIn', value: 'linkedin' },
                    ],
                  },
                  validation: Rule => Rule.required(),
                }),
                defineField({
                  name: 'url',
                  title: 'Social Media URL',
                  type: 'url',
                  validation: Rule => Rule.required(),
                }),
                defineField({
                  name: 'iconName',
                  title: 'Icon Name',
                  type: 'string',
                  description: 'Lucide React icon name (auto-filled based on platform)',
                  readOnly: true,
                }),
              ],
              preview: {
                select: {
                  title: 'platform',
                  subtitle: 'url',
                },
                prepare(selection) {
                  const { title, subtitle } = selection
                  const platformEmojis = {
                    facebook: '📘',
                    twitter: '🐦',
                    instagram: '📸',
                    linkedin: '💼',
                  }
                  return {
                    title: title.charAt(0).toUpperCase() + title.slice(1),
                    subtitle: subtitle,
                    media: () => platformEmojis[title as keyof typeof platformEmojis] || '🔗',
                  }
                },
              },
            },
          ],
        }),
      ],
    }),
    defineField({
      name: 'backgroundImages',
      title: 'Background Pattern Images',
      type: 'object',
      fields: [
        defineField({
          name: 'pattern1Green',
          title: 'Green Pattern 1',
          type: 'image',
          description: 'Background pattern for contact information section',
        }),
        defineField({
          name: 'pattern2Green',
          title: 'Green Pattern 2',
          type: 'image',
          description: 'Background pattern for contact information section',
        }),
        defineField({
          name: 'pattern1',
          title: 'Pattern 1',
          type: 'image',
          description: 'Background pattern for why choose us section',
        }),
        defineField({
          name: 'pattern2',
          title: 'Pattern 2',
          type: 'image',
          description: 'Background pattern for why choose us section',
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare(selection) {
      return {
        title: selection.title || 'Contact Information',
        media: () => '📞',
      }
    },
  },
})
