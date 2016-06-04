---
layout: post
status: publish
published: true
title: ! 'Magento Error: Skip Import Row, Required Field “sku” Not Defined'
categories:
- Magento Development
---
I was getting this error message when doing an import of simple products in to a Magento store.  I already had some products in the store so I had run the "export all products" profile to get a starting spreadsheet to add to.

Unfortunately, when I came to reimport the spreadsheet, it did the first few lines successfully and then failed.  It failed on the first line of my newly added products complaining about undefined SKU.  After double checking that column did in fact have content in it, I realised my error.

<h3>Save as UTF-8</h3>

I had been editing the spreadsheet in Neo/Open Office and when I had saved as a Text csv file, it had not saved in UTF-8 format.   This was breaking the import process.

So make sure when bulk importing Magento products that you're saving in the right format.  To change this in Open Office:

When you are on the save screen, tick the "Edit filter settings" box and then once you click save you will be given the option of choosing the encoding format.

Best of luck with the rest of the product import!
