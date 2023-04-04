import {Rule} from 'sanity'

export default {
  name: 'project',
  type: 'document',
  title: 'Project',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      codegen: {required: true},
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'description',
      type: 'string',
      title: 'Description',
      codegen: {required: true},
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'source',
      type: 'string',
      title: 'Link to source',
      codegen: {required: true},
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'url',
      type: 'string',
      title: 'URL',
      codegen: {required: false},
    },
    {
      name: 'picture',
      type: 'image',
      title: 'Image',
      codegen: {required: true},
      validation: (Rule: Rule) => Rule.required(),
    },
  ],
}
