/** @type {import('payload/types').CollectionConfig} */

const Competitors = {
  slug: 'competitors',
  auth: true,
  admin: {
    useAsTitle: 'peserta',
  },
  access: {
    create: () => true,
    read: () => true,
    delete: () => true
},
  fields: [
    // Email added by default
    // Add more fields as needed
    {
      name: 'peserta',
      type: 'text',
      required: true
    },
    {
      name: 'asal_sekolah',
      type: 'text',
      required: true,
    },
    {
      name: 'status_daftar',
      type: 'select',
      saveToJWT: true,
      hasMany: false,
      options: [
        {
          label: 'waiting',
          value: 'waiting'
        },
        {
          label: 'rejected',
          value: 'rejected'
        },
        {
          label: 'accepted',
          value: 'accepted'
        }
      ],
      defaultValue: 'waiting'
    }
  ],
}

export default Competitors
