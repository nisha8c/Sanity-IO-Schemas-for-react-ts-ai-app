export default {
    name: 'countries',
    title: 'Countries',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Country Name',
            type: 'string'
        },
        {
            name: 'capital',
            title: 'Capital of the Country',
            type: 'string'
        },
        {
            name: 'imageurl',
            title: 'ImgUrl',
            type: 'image',
            options: {
                hotspot: true,
            }
        },
    ]
}