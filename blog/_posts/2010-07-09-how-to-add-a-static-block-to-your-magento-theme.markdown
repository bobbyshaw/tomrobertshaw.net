---
layout: post
status: publish
published: true
title: How to Add a Static Block to Your Magento Theme
categories:
- Magento Development
---
When creating your magento theme, you often will want to insert cms static blocks rather than keeping all of the content in the theme.  The store owner is going to want to change the content now and again and if you do as much as possible with static blocks, they can be edited in the Magento Admin.

Place in the appropriate layout file and scope.  If this was, for example, a static block in the footer, you would need to add it in <tt>app/design/frontend/[interface_name]/[theme_name]/layout/page.xml</tt> inside the scope of the "footer" block.

{% highlight xml %}
<block type="cms/block" name="reference_to_static_block">
    <action method="setBlockId"><block_id>name-of-static-block</block_id></action>
</block>
{% endhighlight %}

The <tt>name-of-static-block</tt> has to be the static block identifier in <tt>Magento Admin -> CMS -> Static Blocks</tt>

Then in your template, continuing with the example of it being in the footer, we then get static block content using this sweet and simple line in <tt>app/design/frontend/[interface_name]/[theme_name]/template/page/html/footer.phtml</tt>:

{% highlight php %}
<?php echo $this->getChildHtml('reference_to_static_block') ?>
{% endhighlight %}
