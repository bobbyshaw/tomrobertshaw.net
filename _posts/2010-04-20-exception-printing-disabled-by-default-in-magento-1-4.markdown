---
layout: post
status: publish
published: true
title: Exception Printing Disabled by Default in Magento 1.4
author: Tom Robertshaw
author_login: admin
author_email: tom.robertshaw@meanbee.com
wordpress_id: 172
wordpress_url: http://tomrobertshaw.net/?p=172
date: 2010-04-20 23:03:25.000000000 +01:00
categories:
- Magento Development
tags: []
comments:
- id: 3698
  author: ehsaan
  author_email: ! '`gohartextiles@gmail.com'
  author_url: http://notyetonline
  date: !binary |-
    MjAxMi0wNi0yOSAwOToxOTo1NiArMDEwMA==
  date_gmt: !binary |-
    MjAxMi0wNi0yOSAwODoxOTo1NiArMDEwMA==
  content: ! "Hello,\r\n\r\nI am customizing a magento template using local host.\r\n\r\nWhile
    installing some extentions .... I created a backup and finished installation.\r\n\r\nNext
    I wanted to remove the extensions and started to rollback in magento admin panel.\r\n\r\nI
    was processing and took a bit long while i closed the browser ... after which
    it was showing under maintenance... \r\n\r\nI found a solution online to remove
    maintenence file from the folder.... and started the browser again... however
    as the problem got fixed... it wasnt logging in with the user name and password..\r\n\r\nthen
    something went wrong and now its showing me an error \r\n\r\nThere has been an
    error processing your request\r\nException printing is disabled by default for
    security reasons.\r\nError log record number: 63092085\r\n\r\nFor the same, i
    again found some solutions e.g. changing local.xml.sample to local.xml, however
    its still not working...\r\n\r\nCould you please guide me how to get my store
    running back...\r\n\r\nThanks"
- id: 3700
  author: Jay D
  author_email: dave.jay90@gmail.com
  author_url: ''
  date: !binary |-
    MjAxMi0wNy0wMSAwNjo1OToyOCArMDEwMA==
  date_gmt: !binary |-
    MjAxMi0wNy0wMSAwNTo1OToyOCArMDEwMA==
  content: Thanks!!. Worked at first go.
- id: 4884
  author: Richa
  author_email: shreeonly@gmail.com
  author_url: ''
  date: !binary |-
    MjAxMy0wMy0xMyAxMDo1MTowOCArMDAwMA==
  date_gmt: !binary |-
    MjAxMy0wMy0xMyAwOTo1MTowOCArMDAwMA==
  content: ! "Thanks \r\nWorked at the very first go."
- id: 5456
  author: Princeston Kay
  author_email: princeakere@yahoo.com
  author_url: ''
  date: !binary |-
    MjAxMy0wNy0wOCAxNTo0MzoyNyArMDEwMA==
  date_gmt: !binary |-
    MjAxMy0wNy0wOCAxNDo0MzoyNyArMDEwMA==
  content: ! "Hello,\r\n\r\nPlease help - I am getting the following error message
    on my site after database backup and database password change in cpanel\r\n\r\nThere
    has been an error processing your request\r\nException printing is disabled by
    default for security reasons.\r\nError log record number: 347400034\r\n\r\nBelow
    is the content of the error log:\r\n\r\n\r\n\r\n\r\n\r\na:4:{i:0;s:100:\"SQLSTATE[28000]
    [1045] Access denied for user 'shoppersmagdb'@'50.611.197.58' (using password:
    YES)\";i:1;s:2552:\"#0 /home/content/65/10681165/html/lib/Zend/Db/Adapter/Pdo/Mysql.php(96):
    Zend_Db_Adapter_Pdo_Abstract-&gt;_connect()\r\n#1 /home/content/65/10681165/html/lib/Varien/Db/Adapter/Pdo/Mysql.php(313):
    Zend_Db_Adapter_Pdo_Mysql-&gt;_connect()\r\n#2 /home/content/65/10681165/html/lib/Zend/Db/Adapter/Abstract.php(459):
    Varien_Db_Adapter_Pdo_Mysql-&gt;_connect()\r\n#3 /home/content/65/10681165/html/lib/Zend/Db/Adapter/Pdo/Abstract.php(238):
    Zend_Db_Adapter_Abstract-&gt;query('SET NAMES utf8', Array)\r\n#4 /home/content/65/10681165/html/lib/Varien/Db/Adapter/Pdo/Mysql.php(419):
    Zend_Db_Adapter_Pdo_Abstract-&gt;query('SET NAMES utf8', Array)\r\n#5 /home/content/65/10681165/html/app/code/core/Mage/Core/Model/Resource.php(169):
    Varien_Db_Adapter_Pdo_Mysql-&gt;query('SET NAMES utf8')\r\n#6 /home/content/65/10681165/html/app/code/core/Mage/Core/Model/Resource.php(110):
    Mage_Core_Model_Resource-&gt;_newConnection('pdo_mysql', Object(Mage_Core_Model_Config_Element))\r\n#7
    /home/content/65/10681165/html/app/code/core/Mage/Core/Model/Resource/Db/Abstract.php(320):
    Mage_Core_Model_Resource-&gt;getConnection('core_write')\r\n#8 /home/content/65/10681165/html/app/code/core/Mage/Core/Model/Resource/Db/Abstract.php(350):
    Mage_Core_Model_Resource_Db_Abstract-&gt;_getConnection('write')\r\n#9 /home/content/65/10681165/html/app/code/core/Mage/Core/Model/Resource/Db/Abstract.php(335):
    Mage_Core_Model_Resource_Db_Abstract-&gt;_getWriteAdapter()\r\n#10 /home/content/65/10681165/html/app/code/core/Mage/Core/Model/Resource/Cache.php(53):
    Mage_Core_Model_Resource_Db_Abstract-&gt;_getReadAdapter()\r\n#11 /home/content/65/10681165/html/app/code/core/Mage/Core/Model/Cache.php(455):
    Mage_Core_Model_Resource_Cache-&gt;getAllOptions()\r\n#12 /home/content/65/10681165/html/app/code/core/Mage/Core/Model/Cache.php(497):
    Mage_Core_Model_Cache-&gt;_initOptions()\r\n#13 /home/content/65/10681165/html/app/code/core/Mage/Core/Model/App.php(1183):
    Mage_Core_Model_Cache-&gt;canUse('config')\r\n#14 /home/content/65/10681165/html/app/code/core/Mage/Core/Model/Config.php(414):
    Mage_Core_Model_App-&gt;useCache('config')\r\n#15 /home/content/65/10681165/html/app/code/core/Mage/Core/Model/Config.php(294):
    Mage_Core_Model_Config-&gt;_canUseCacheForInit()\r\n#16 /home/content/65/10681165/html/app/code/core/Mage/Core/Model/App.php(413):
    Mage_Core_Model_Config-&gt;loadModulesCache()\r\n#17 /home/content/65/10681165/html/app/code/core/Mage/Core/Model/App.php(343):
    Mage_Core_Model_App-&gt;_initModules()\r\n#18 /home/content/65/10681165/html/app/Mage.php(683):
    Mage_Core_Model_App-&gt;run(Array)\r\n#19 /home/content/65/10681165/html/index.php(71):
    Mage::run('', 'store')\r\n#20 {main}\";s:3:\"url\";s:1:\"/\";s:11:\"script_name\";s:10:\"/index.php\";}"
---
While doing some development on the <a href="http://www.meanbee.com">Meanbee</a> postcode module today on Magento 1.4.0.1, I received the following error:

<pre lang="text">
There has been an error processing your request

Exception printing is disabled by default for security reasons.

Error log record number: 1037788671028
</pre>

It takes 2 seconds to enable this.  Go to the magento installation root and then into the errors folder.  Subsequently:

<pre lang="text">cp local.xml.sample local.xml </pre>

Exception printing is now enabled.
