import { Globe, Browsers, Compass, SquareHalfBottom, Article, ShareNetwork } from 'phosphor-react'

export const deskStructure = (S, context) =>
  S.list()
    .title('Content')
    .items([
      // PAGES ------------------
      S.listItem()
        .title('Pages')
        .icon(Browsers)
        .child(S.documentTypeList('page').title('Pages')),
      // BLOG ------------------
        S.listItem()
        .title('Bloger')
        .icon(Article)
        .child(S.documentTypeList('blog').title('Blogs')),
       // BLOG ------------------
       S.listItem()
       .title('Tjenester')
       .icon(ShareNetwork)
       .child(S.documentTypeList('service').title('Service')),
      // GLOBAL ------------------
      S.listItem()
        .title('Global')
        .icon(Globe)
        .child(
          S.list()
            .title('Global')
            .items([
              S.listItem()
                .title('Navigation')
                .icon(Compass)
                .child(
                  S.editor()
                    .id('navigation')
                    .schemaType('navigation')
                    .documentId('navigation')
                ),
              S.divider(),
              S.listItem()
                .title('Footer')
                .icon(SquareHalfBottom)
                .child(
                  S.editor()
                    .id('footer')
                    .schemaType('footer')
                    .documentId('footer')
                ),
            ])
        ),
    ])
