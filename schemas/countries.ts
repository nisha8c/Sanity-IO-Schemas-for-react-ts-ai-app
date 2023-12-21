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
            name: 'imgUrl',
            title: 'ImgUrl',
            type: 'image',
            options: {
                hotspot: true,
            }
        },
        {
            name: 'level',
            title: 'Level',
            type: 'string'
        },
    ]
}