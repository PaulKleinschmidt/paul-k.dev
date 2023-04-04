import {Rule} from 'sanity'

export default {
  name: 'experience',
  type: 'document',
  title: 'Experience',
  fields: [
    {
      name: 'company',
      type: 'string',
      title: 'Company',
      codegen: {required: true},
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'link',
      type: 'string',
      title: 'Link',
      codegen: {required: true},
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      codegen: {required: true},
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'tenure',
      type: 'string',
      title: 'Tenure',
      codegen: {required: true},
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'tech',
      type: 'string',
      title: 'Tech',
      codegen: {required: true},
      validation: (Rule: Rule) => Rule.required(),
    },
  ],
}
