// Complete Perek Shira Text - exactly as provided
const PEREK_SHIRA_TEXT = `<div class="intro-section">
<h3>פרק שירה – מבוא ומעלת אמירתם</h3>
<p>אָמַר רַבִּי, כָּל הָעוֹסֵק בְּפֶרֶק שִׁירָה בָּעוֹלָם הַזֶּה, זוֹכֶה לִלְמֹד וּלְלַמֵּד, לִשְׁמֹר וְלַעֲשׂוֹת וּלְקַיֵּם, וְתַלְמוּדוֹ מִתְקַיֵּם בְּיָדוֹ, וְנִצּוֹל מִיֵּצֶר הָרַע, וּמִפֶּגַע רַע, וּמֵחִבּוּט הַקֶּבֶר, וּמִדִּינָהּ שֶׁל גֵּיהִינֹּם, וּמֵחֶבְלוֹ שֶׁל מָשִׁיחַ, וּמַאֲרִיךְ יָמִים, וְזוֹכֶה לִימוֹת הַמָּשִׁיחַ, וּלְחַיֵּי הָעוֹלָם הַבָּא:</p>

<p>תַּנְיָא אָמַר רַבִּי אֱלִיעֶזֶר, כָּל הָאוֹמֵר שִׁירָה זוֹ בָּעוֹלָם הַזֶּה, זוֹכֶה וְאוֹמְרוֹ לָעוֹלָם הַבָּא, שֶׁנֶּאֱמַר אָז יָשִׁיר מֹשֶׁה, שָׁר לֹא נֶאֱמַר אֶלָּא יָשִׁיר אוֹתוֹ לֶעָתִיד לָבוֹא:</p>

<p>תָּנְיָא רַבִּי אֱלִיעֶזֶר הַגָּדוֹל אוֹמֵר, כָּל הָעוֹסֵק בְּפֶרֶק שִׁירָה זֶה בְּכָל יוֹם, מֵעִיד אֲנִי עָלָיו שֶׁהוּא בֶּן הָעוֹלָם הַבָּא, וְנִצּוֹל מִפֶּגַע רָע, וּמִיֵּצֶר הָרָע, וּמִדִּין קָשֶׁה, וּמִשָּׂטָן, וּמִכָּל מִינֵי מַשְׁחִית וּמַזִּיקִין. גְּמוֹר בְכָל לְבָבְךָ וּבְכָל נַפְשְׁךָ לָדַעַת דְּרָכַי וְלִשְׁמוֹר מִצְוֹתַי וְחֻקָּי. נְצוֹר תּוֹרָתִי בִּלְבָבֶךָ וְנֶגֶד עֵינֶיךָ תִּהְיֶה יִרְאָתִי. שְׁמוֹר פִּיךָ וּלְשׁוֹנְךָ מִכָּל חֵטְא וְאַשְׁמָה, וַאֲנִי אֶהְיֶה עִמְּךָ בְּכָל מָקוֹם שֶׁתֵּלֵךְ, וַאֲלַמֶּדְךָ שֵׂכֶל וּבִינָה מִכָּל דָּבָר. וֶהֱוֵי יוֹדֵעַ שֶׁכָּל מַה שֶּׁבָּרָא הַקָּדוֹשׁ בָּרוּךְ הוּא לֹא בְרָאוֹ כִּי אִם לִכְבוֹדוֹ, שֶׁנֶּאֱמַר כֹּל הַנִּקְרָא בִשְׁמִי וְלִכְבוֹדִי בְרָאתִיו יְצַרְתִּיו אַף עֲשִׂיתִיו.</p>

<p>אָמְרוּ חז"ל עַל דָּוִד מֶלֶךְ יִשְׂרָאֵל, בְּשָׁעָה שֶׁסִּיֵּם סֵפֶר תְּהִלִּים זָחָה דַּעְתּוֹ עָלָיו וְאָמַר לִפְנֵי הַקָּדוֹשׁ בָּרוּךְ הוּא, יֵשׁ בְּרִיָּה שֶׁבָּרָאתָ בְּעוֹלָמְךָ שֶׁאוֹמֶרֶת שִׁירוֹת וְתִשְׁבָּחוֹת יוֹתֵר מִמֶּנִּי. בְּאוֹתָהּ שָׁעָה נִזְדַּמְנָה לוֹ צְפַרְדֵּעַ אַחַת, וְאָמְרָה לוֹ, דָּוִד אַל תָּזוּחַ דַּעְתְּךָ עָלֶיךָ, שֶׁאֲנִי אוֹמֶרֶת שִׁירוֹת וְתִשְׁבָּחוֹת יוֹתֵר מִמֶּךָּ. וְלֹא עוֹד אֶלָּא כָּל שִׁירָה שֶׁאֲנִי אוֹמֶרֶת מְמַשֶּׁלֶת עָלֶיהָ שְׁלֹשֶׁת אֲלָפִים מְשָׁלִים, שֶׁנֶּאֱמַר וַיְדַבֵּר שְׁלֹשֶׁת אֲלָפִים מָשָׁל וַיְהִי שִׁירוֹ חֲמִשָּׁה וָאָלֶף. וְלֹא עוֹד אֶלָּא שֶׁאֲנִי עוֹסֶקֶת בְּמִצְוָה גְדוֹלָה, וְזוּ הִיא הַמִּצְוָה שֶׁאֲנִי עוֹסֶקֶת בָּהּ, יֵשׁ בִּשְׂפַת הַיָּם מִין אֶחָד שֶׁאֵין פַּרְנָסָתוֹ כִּי אִם מִן הַמַּיִם, וּבְשָׁעָה שֶׁהוּא רָעֵב נוֹטְלֵנִי וְאוֹכְלֵנִי. זוּ הִיא הַמִּצְוָה. לְקַיֵּם מַה שֶּׁנֶּאֱמַר אִם רָעֵב שׂוֹנַאֲךָ הַאֲכִילֵהוּ לֶחֶם, וְאִם צָמֵא הַשְׁקֵהוּ מָיִם, כִּי גֶּחָלִים אַתָּה חוֹתֶה עַל רֹאשׁוֹ, וַיְיָ יְשַׁלֶּם לָךְ. אַל תִּקְרֵי יְשַׁלֶּם לָךְ אֶלָּא יַשְׁלִימֶנּוּ לָךְ:</p>
</div>

<div class="chapter-section">
<h3>פרק שירה – פֶּרֶק רִאשׁוֹן</h3>
<div class="verse"><strong>שָׁמַיִם אוֹמְרִים:</strong> הַשָּׁמַיִם, מְסַפְּרִים כְּבוֹד אֵל; וּמַעֲשֵׂה יָדָיו, מַגִּיד הָרָקִיעַ׃ (תהלים יט ב)</div>

<div class="verse"><strong>אֶרֶץ אוֹמֶרֶת:</strong> לַיְהֹוָה הָאָרֶץ וּמְלוֹאָהּ; תֵּבֵל, וְיֹשְׁבֵי בָהּ׃ (תהלים פרק כד א) וְאוֹמֵר. מִכְּנַף הָאָרֶץ זְמִרֹת שָׁמַעְנוּ צְבִי לַצַּדִּיק׃ (ישעיהו כד טז)</div>

<div class="verse"><strong>גַּן עֵדֶן אוֹמֵר:</strong> עוּרִי צָפוֹן וּבוֹאִי תֵימָן, הָפִיחִי גַנִּי יִזְּלוּ בְשָׂמָיו; יָבֹא דוֹדִי לְגַנּוֹ, וְיֹאכַל פְּרִי מְגָדָיו׃ (שיר השירים ד טז)</div>

<div class="verse"><strong>גֵּיהִנֹּם אוֹמֵר:</strong> כִּי הִשְׂבִּיעַ נֶפֶשׁ שֹׁקֵקָה; וְנֶפֶשׁ רְעֵבָה מִלֵּא טוֹב׃ (תהלים קז ט)</div>

<div class="verse"><strong>מִדְבָּר אוֹמֵר:</strong> יְשֻׂשׂוּם מִדְבָּר וְצִיָּה; וְתָגֵל עֲרָבָה וְתִפְרַח כַּחֲבַצָּלֶת׃ (ישעיהו לה א)</div>

<div class="verse"><strong>שָׂדוֹת אוֹמְרִים:</strong> יְהֹוָה, בְּחָכְמָה יָסַד אָרֶץ; כּוֹנֵן שָׁמַיִם, בִּתְבוּנָה׃ (משלי ג יט)</div>

<div class="verse"><strong>מַיִם אוֹמְרִים:</strong> לְקוֹל תִּתּוֹ הֲמוֹן מַיִם בַּשָּׁמַיִם, וַיַּעַל נְשִׂאִים מִקְצֵה אָרֶץ (ירמיה נא טז)</div>

<div class="verse"><strong>יַמִּים אוֹמְרִים:</strong> מִקֹּלוֹת מַיִם רַבִּים, אַדִּירִים מִשְׁבְּרֵי יָם; אַדִּיר בַּמָּרוֹם יְהֹוָה׃ (תהלים צג ד)</div>

<div class="verse"><strong>נְהָרוֹת אוֹמְרִים:</strong> נְהָרוֹת יִמְחֲאוּ כָף; יַחַד, הָרִים יְרַנֵּנוּ׃ (תהלים צח ח)</div>

<div class="verse"><strong>מַעְיָנוֹת אוֹמְרִים:</strong> וְשָׁרִים כְּחֹלְלִים כָּל מַעְיָנַי בָּךְ׃ (תהלים פז ז)</div>
</div>

<div class="chapter-section">
<h3>פרק שירה – פֶּרֶק שֵׁנִי</h3>
<div class="verse"><strong><span>יוֹם</span> אוֹמֵר:</strong> <span>יוֹם</span> לְיוֹם יַבִּיעַ אֹמֶר; וְלַיְלָה לְּלַיְלָה, יְחַוֶּה דָּעַת׃ (תהלים יט ג)</div>

<div class="verse day-night"><strong><span >לַיְלָה</span> אוֹמֵר:</strong> לְהַגִּיד בַּבֹּקֶר חַסְדֶּךָ; וֶאֱמוּנָתְךָ, בַּלֵּילוֹת׃ (תהלים צב ג)</div>

<div class="verse"><strong>שֶׁמֶשׁ אוֹמֵר:</strong> שֶׁמֶשׁ יָרֵחַ עָמַד זְבֻלָה; לְאוֹר חִצֶּיךָ יְהַלֵּכוּ, לְנֹגַהּ בְּרַק חֲנִיתֶךָ׃ (חבקוק ג יא)</div>

<div class="verse"><strong>יָרֵחַ אוֹמֶרֶת:</strong> עָשָׂה יָרֵחַ לְמוֹעֲדִים; שֶׁמֶשׁ, יָדַע מְבוֹאוֹ׃ (תהלים קד יט)</div>

<div class="verse"><strong>כּוֹכָבִים אוֹמְרִים:</strong> אַתָּה הוּא יְהֹוָה לְבַדֶּךָ, אַתָּה עָשִׂיתָ אֶת הַשָּׁמַיִם שְׁמֵי הַשָּׁמַיִם וְכָל צְבָאָם, הָאָרֶץ וְכָל אֲשֶׁר עָלֶיהָ הַיַּמִּים וְכָל אֲשֶׁר בָּהֶם, וְאַתָּה מְחַיֶּה אֶת כֻּלָּם; וּצְבָא הַשָּׁמַיִם לְךָ מִשְׁתַּחֲוִים׃ (נחמיה ט ו)</div>

<div class="verse"><strong>עָבִים אוֹמְרִים:</strong> יָשֶׁת חֹשֶׁךְ סִתְרוֹ, סְבִיבוֹתָיו סֻכָּתוֹ; חֶשְׁכַת מַיִם, עָבֵי שְׁחָקִים׃ (תהלים יח יב)</div>

<div class="verse"><strong>עַנְנֵי כָבוֹד אוֹמְרִים:</strong> אַף בְּרִי יַטְרִיחַ עָב; יָפִיץ, עֲנַן אוֹרוֹ׃ (איוב לז יא)</div>

<div class="verse"><strong>רוּחַ אוֹמֵר:</strong> אֹמַר לַצָּפוֹן תֵּנִי, וּלְתֵימָן אַל תִּכְלָאִי; הָבִיאִי בָנַי מֵרָחוֹק, וּבְנוֹתַי מִקְצֵה הָאָרֶץ׃ (ישעיה מג ו)</div>

<div class="verse"><strong>בְּרָקִים אוֹמְרִים:</strong> בְּרָקִים לַמָּטָר עָשָׂה; מוֹצֵא רוּחַ מֵאוֹצְרוֹתָיו׃ (תהלים קלה ז)</div>

<div class="verse"><strong>טַל אוֹמֵר:</strong> אֶהְיֶה כַטַּל לְיִשְׂרָאֵל, יִפְרַח כַּשּׁוֹשַׁנָּה; וְיַךְ שָׁרָשָׁיו כַּלְּבָנוֹן׃ (הושע יד ו)</div>

<div class="verse"><strong>גְּשָׁמִים אוֹמְרִים:</strong> גֶּשֶׁם נְדָבוֹת תָּנִיף אֱלֹהִים; נַחֲלָתְךָ וְנִלְאָה, אַתָּה כוֹנַנְתָּהּ׃ (תהלים סח י)</div>
</div>

<div class="chapter-section">
<h3>פרק שירה – פֶּרֶק שְׁלִישִׁי</h3>
<div class="verse"><strong>אִילָנוֹת שֶׁבַּשָּׂדֶה אוֹמְרִים:</strong> אָז יְרַנְּנוּ עֲצֵי הַיָּעַר; מִלִּפְנֵי יְהֹוָה, כִּי בָא לִשְׁפּוֹט אֶת הָאָרֶץ׃ (דברי הימים א טז לג)</div>

<div class="verse"><strong>גֶּפֶן אוֹמֶרֶת:</strong> כֹּה אָמַר יְהֹוָה, כַּאֲשֶׁר יִמָּצֵא הַתִּירוֹשׁ בָּאֶשְׁכּוֹל, וְאָמַר אַל תַּשְׁחִיתֵהוּ, כִּי בְרָכָה בּוֹ; כֵּן אֶעֱשֶׂה לְמַעַן עֲבָדַי, לְבִלְתִּי הַשְׁחִית הַכֹּל׃ (ישעיה סה ח)</div>

<div class="verse"><strong>תְּאֵנָה אוֹמֶרֶת:</strong> נֹצֵר תְּאֵנָה יֹאכַל פִּרְיָהּ׃ (משלי כז יח)</div>

<div class="verse"><strong>רִמּוֹן אוֹמֵר:</strong> כְּפֶלַח הָרִמּוֹן רַקָּתֵךְ, מִבַּעַד לְצַמָּתֵךְ׃ (שיר השירים ד ג)</div>

<div class="verse"><strong>תָּמָר אוֹמֵר:</strong> צַדִּיק כַּתָּמָר יִפְרָח; כְּאֶרֶז בַּלְּבָנוֹן יִשְׂגֶּה׃ (תהלים צב יג)</div>

<div class="verse"><strong>תַּפּוּחַ אוֹמֵר:</strong> כְּתַפּוּחַ בַּעֲצֵי הַיַּעַר, כֵּן דּוֹדִי בֵּין הַבָּנִים; בְּצִלּוֹ חִמַּדְתִּי וְיָשַׁבְתִּי, וּפִרְיוֹ מָתוֹק לְחִכִּי׃ (שיר השירים ב ג)</div>

<div class="verse"><strong>שִׁבֹּלֶת חִטִּים אוֹמֶרֶת:</strong> שִׁיר הַמַּעֲלוֹת; מִמַּעֲמַקִּים קְרָאתִיךָ יְהֹוָה׃ (תהלים קל א)</div>

<div class="verse"><strong>שִׁבֹּלֶת שְׂעוֹרִים אוֹמֶרֶת:</strong> תְּפִלָּה לְעָנִי כִי יַעֲטֹף; וְלִפְנֵי יְהֹוָה, יִשְׁפֹּךְ שִׂיחוֹ׃ (תהלים קב א)</div>

<div class="verse"><strong>שְׁאָר השִׁבּוֹלִים אוֹמְרִים:</strong> לָבְשׁוּ כָרִים הַצֹּאן, וַעֲמָקִים יַעַטְפוּ בָר; יִתְרוֹעֲעוּ, אַף יָשִׁירוּ׃ (תהלים סה יד)</div>

<div class="verse"><strong>יְרָקוֹת שֶׁבַּשָּׂדֶה אוֹמְרִים:</strong> תְּלָמֶיהָ רַוֵּה נַחֵת גְּדוּדֶיהָ; בִּרְבִיבִים תְּמֹגְגֶנָּה, צִמְחָהּ תְּבָרֵךְ׃ (תהלים סה יא)</div>

<div class="verse"><strong>דְּשָׁאִים אוֹמְרִים:</strong> יְהִי כְבוֹד יְהֹוָה לְעוֹלָם; יִשְׂמַח יְהֹוָה בְּמַעֲשָׂיו׃ (תהלים קד לא)</div>
</div>
<div class="chapter-section">
<h3>פרק שירה – פֶּרֶק רְבִיעִי</h3>
<div class="verse"><strong>תַּרְנְגוֹל אוֹמֵר:</strong> בְּשָׁעָה שֶׁבָּא הַקָּדוֹשׁ בָּרוּךְ הוּא אֵצֶל הַצַּדִּיקִים בְּגַן עֵדֶן, זוֹלְפִים כָּל אִילָנֵי גַּן עֵדֶן בְּשָׂמִים, וּמְרַנְּנִים וּמְשַׁבְּחִים, וְאָז גַּם הוּא מִתְעוֹרֵר וּמְשַׁבֵּחַ:</div>

<div class="verse">בְּקוֹל רִאשׁוֹן אוֹמֵר: שְׂאוּ שְׁעָרִים רָאשֵׁיכֶם וְהִנָּשְׂאוּ פִּתְחֵי עוֹלָם, וְיָבוֹא מֶלֶךְ הַכָּבוֹד׃ מִי זֶה מֶלֶךְ הַכָּבוֹד יְהֹוָה עִזּוּז וְגִבּוֹר יְהֹוָה גִּבּוֹר מִלְחָמָה׃ (תהלים כד ז-ח)</div>

<div class="verse">בְּקוֹל שֵׁנִי אוֹמֵר: שְׂאוּ שְׁעָרִים רָאשֵׁיכֶם, וּשְׂאוּ פִּתְחֵי עוֹלָם, וְיָבֹא מֶלֶךְ הַכָּבוֹד׃ מִי הוּא זֶה מֶלֶךְ הַכָּבוֹד יְהֹוָה צְבָאוֹת, הוּא מֶלֶךְ הַכָּבוֹד סֶלָה׃ (תהלים כד ט-י)</div>

<div class="verse">בְּקוֹל שְׁלִישִׁי אוֹמֵר: עִמְדוּ צַדִּיקִים וְעִסְקוּ בַּתּוֹרָה, כְּדֵי שֶׁיִּהְיֶה שְׂכַרְכֶם כָּפוּל לְעוֹלָם הַבָּא:</div>

<div class="verse">בְּקוֹל רְבִיעִי אוֹמֵר: לִישׁוּעָתְךָ קִוִּיתִי יְהֹוָה׃ (בראשית מט יח)</div>

<div class="verse">בְּקוֹל חֲמִישִׁי אוֹמֵר: עַד מָתַי עָצֵל תִּשְׁכָּב, מָתַי תָּקוּם מִשְּׁנָתֶךָ׃ (משלי ו ט)</div>

<div class="verse">בְּקוֹל שִׁישִׁי אוֹמֵר:אַל תֶּאֱהַב שֵׁנָה פֶּן תִּוָּרֵשׁ; פְּקַח עֵינֶיךָ שְׂבַע לָחֶם׃ (משלי כ יג)</div>

<div class="verse">בְּקוֹל שְׁבִיעִי אוֹמֵר:עֵת לַעֲשׂוֹת לַיְהֹוָה; הֵפֵרוּ, תּוֹרָתֶךָ׃ (תהלים קיט קכו)</div>

<div class="verse"><strong>תַּרְנְגֹלֶת אוֹמֶרֶת:</strong> נֹתֵן לֶחֶם לְכָל בָּשָׂר; כִּי לְעוֹלָם חַסְדּוֹ׃ (תהלים קלו כה)</div>

<div class="verse"><strong>יוֹנָה אוֹמֶרֶת:</strong> כְּסוּס עָגוּר כֵּן אֲצַפְצֵף, אֶהְגֶּה כַּיּוֹנָה; דַּלּוּ עֵינַי לַמָּרוֹם, אֲדֹנָי עָשְׁקָה לִּי עָרְבֵנִי׃ (ישעיה לח יד). אוֹמֶרֶת יוֹנָה לִפְנֵי הַקָּדוֹשׁ בָּרוּךְ הוּא, רִבּוֹנוֹ שֶׁל עוֹלָם, יִהְיוּ מְזוֹנוֹתַי מְרוּרִים כְּזַיִת בְּיָדֶךָ, וְאַל יִהְיוּ מְתוּקִים כִּדְבַשׁ, עַל יְדֵי בָּשָׂר וָדָם:</div>

<div class="verse"><strong>נֶשֶׁר אוֹמֵר:</strong> וְאַתָּה יְהֹוָה אֱלֹהִים צְבָאוֹת אֱלֹהֵי יִשְׂרָאֵל, הָקִיצָה, לִפְקֹד כָּל הַגּוֹיִם; אַל תָּחֹן כָּל בֹּגְדֵי אָוֶן סֶלָה׃ (תהלים נט ו)</div>

<div class="verse"><strong>עָגוּר אוֹמֵר:</strong> הוֹדוּ לַיְהֹוָה בְּכִנּוֹר; בְּנֵבֶל עָשׂוֹר, זַמְּרוּ לוֹ׃ (תהלים לג ב)</div>

<div class="verse"><strong>צִפּוֹר אוֹמֵר:</strong> גַּם צִפּוֹר מָצְאָה בַיִת, וּדְרוֹר קֵן לָהּ אֲשֶׁר שָׁתָה אֶפְרֹחֶיהָ, אֶת מִזְבְּחוֹתֶיךָ יְהֹוָה צְבָאוֹת מַלְכִּי וֵאלֹהָי׃ (תהלים פד ד)</div>

<div class="verse"><strong>סְנוּנִית אוֹמֶרֶת:</strong> לְמַעַן יְזַמֶּרְךָ כָבוֹד וְלֹא יִדֹּם; יְהֹוָה אֱלֹהַי, לְעוֹלָם אוֹדֶךָּ׃ (תהלים ל יג)</div>

<div class="verse"><strong>טַסִּית אוֹמֶרֶת:</strong> עֶזְרִי מֵעִם יְהֹוָה; עֹשֵׂה, שָׁמַיִם וָאָרֶץ׃ (תהלים קכא ב)</div>

<div class="verse"><strong>צִיָּה אוֹמֶרֶת:</strong> אוֹר זָרֻעַ לַצַּדִּיק, וּלְיִשְׁרֵי לֵב שִׂמְחָה׃ (תהלים צז יא)</div>

<div class="verse"><strong>רְצִפִי אוֹמֵר:</strong> נַחֲמוּ נַחֲמוּ עַמִּי; יֹאמַר אֱלֹהֵיכֶם׃ (ישעיה מ א)</div>

<div class="verse"><strong>חֲסִידָה אוֹמֶרֶת:</strong> דַּבְּרוּ עַל לֵב יְרוּשָׁלַיִם וְקִרְאוּ אֵלֶיהָ, כִּי מָלְאָה צְבָאָהּ, כִּי נִרְצָה עֲוֹנָהּ; כִּי לָקְחָה מִיַּד יְהֹוָה, כִּפְלַיִם בְּכָל חַטֹּאתֶיהָ׃ (ישעיה מ ב)</div>

<div class="verse"><strong>עוֹרֵב אוֹמֵר:</strong> מִי יָכִין לָעֹרֵב, צֵידוֹ כִּי יְלָדָו (יְלָדָיו) אֶל אֵל יְשַׁוֵּעוּ׃ (איוב לח מא)</div>

<div class="verse"><strong>זַרְזִיר אוֹמֵר:</strong> וְנוֹדַע בַּגּוֹיִם זַרְעָם, וְצֶאֱצָאֵיהֶם בְּתוֹךְ הָעַמִּים; כָּל רֹאֵיהֶם יַכִּירוּם, כִּי הֵם זֶרַע בֵּרַךְ יְהֹוָה׃ (ישעיה סא ט)</div>

<div class="verse"><strong>אֲוָז שֶׁבַּבַּיִת אוֹמֶרֶת:</strong> הוֹדוּ לַיְהֹוָה קִרְאוּ בִשְׁמוֹ; הוֹדִיעוּ בָעַמִּים, עֲלִילוֹתָיו׃ שִׁירוּ לוֹ זַמְּרוּ לוֹ; שִׂיחוּ, בְּכָל נִפְלְאוֹתָיו׃ (תהלים קה א-ב)</div>

<div class="verse"><strong>אֲוַז הַבָּר הַמְּשׁוֹטֶטֶת בַּמִּדְבָּר:</strong>כְּשֶׁרוֹאָה אֶת יִשְׂרָאֵל עוֹסְקִים בַּתּוֹרָה אוֹמֶרֶת . קוֹל קוֹרֵא בַּמִּדְבָּר, פַּנּוּ דֶּרֶךְ יְיָ, יַשְּׁרוּ בַּעֲרָבָה מְסִלָּה לֵאלֹהֵינוּ: (ישעיה מ ג) וְעַל מְצִיאוּת מְזוֹנוֹתֶיהָ בַּמִּדְבָּר אוֹמֶרֶת. אָרוּר הַגֶּבֶר אֲשֶׁר יִבְטַח בָּאָדָם, בָּרוּךְ הַגֶּבֶר אֲשֶׁר יִבְטַח בַּיְיָ וְהָיָה יְיָ מִבְטַחוֹ: (ירמיה יז ה-ז)</div>

<div class="verse"><strong>פְרוֹגִיוֹת אוֹמְרִים:</strong> בִּטְחוּ בַיְּהֹוָה עֲדֵי עַד; כִּי בְּיָהּ יְהֹוָה, צוּר עוֹלָמִים׃ (ישעיה כו ד)</div>

<div class="verse"><strong>רָחָמָה אוֹמֶרֶת:</strong> אֶשְׁרְקָה לָהֶם וַאֲקַבְּצֵם כִּי פְדִיתִים; וְרָבוּ כְּמוֹ רָבוּ׃ (זכריה י ח)</div>

<div class="verse"><strong>צִפֹּרֶת כְּרָמִים אוֹמֶרֶת:</strong> אֶשָּׂא עֵינַי אֶל הֶהָרִים; מֵאַיִן, יָבֹא עֶזְרִי׃ (תהלים קכא א)</div>

<div class="verse"><strong>חָסִיל אוֹמֵר:</strong> יְהֹוָה אֱלֹהַי אַתָּה, אֲרוֹמִמְךָ אוֹדֶה שִׁמְךָ, כִּי עָשִׂיתָ פֶּלֶא; עֵצוֹת מֵרָחוֹק אֱמוּנָה אֹמֶן׃ (ישעיה כה א)</div>

<div class="verse"><strong>שְׂמָמִית אוֹמֶרֶת:</strong> הַלְלוּהוּ בְצִלְצְלֵי שָׁמַע; הַלְלוּהוּ, בְּצִלְצְלֵי תְרוּעָה׃ (תהלים קנ ה)</div>

<div class="verse"><strong>זְבוּב אוֹמֵר:</strong> בְּשָׁעָה שֶׁאֵין יִשְׂרָאֵל עוֹסְקִים בַּתּוֹרָה, קוֹל אֹמֵר קְרָא, וְאָמַר מָה אֶקְרָא; כָּל הַבָּשָׂר חָצִיר, וְכָל חַסְדּוֹ כְּצִיץ הַשָּׂדֶה׃ יָבֵשׁ חָצִיר נָבֵל צִיץ, וּדְבַר אֱלֹהֵינוּ יָקוּם לְעוֹלָם׃ (ישעיה מ ו-ח): בּוֹרֵא נִיב שְׂפָתָיִם; שָׁלוֹם שָׁלוֹם לָרָחוֹק וְלַקָּרוֹב אָמַר יְהֹוָה וּרְפָאתִיו׃ (ישעיה נז יט)</div>

<div class="verse"><strong>תַּנִּינִים אוֹמְרִים:</strong> הַלְלוּ אֶת יְהֹוָה מִן הָאָרֶץ; תַּנִּינִים, וְכָל תְּהֹמוֹת׃ (תהלים קמח ז)</div>

<div class="verse"><strong>לִוְיָתָן אוֹמֵר:</strong> הוֹדוּ לַיְהֹוָה כִּי טוֹב; כִּי לְעוֹלָם חַסְדּוֹ׃ (תהלים קלו א)</div>

<div class="verse"><strong>דָּגִים אוֹמְרִים:</strong> קוֹל יְהֹוָה, עַל הַמָּיִם אֵל הַכָּבוֹד הִרְעִים; יְהֹוָה, עַל מַיִם רַבִּים׃ (תהלים כט ג)</div>

<div class="verse"><strong>צְפַרְדֵּעַ אוֹמֶרֶת:</strong> בָּרוּךְ שֵׁם כְּבוֹד מַלְכוּתוֹ לְעוֹלָם וָעֶד:</div>
</div>

<div class="chapter-section">
<h3>פרק שירה – פֶּרֶק חֲמִישִׁי</h3>
<div class="verse"><strong>בְּהֵמָה דַּקָּה טְהוֹרָה אוֹמֶרֶת:</strong> מִי כָמֹכָה בָּאֵלִם יְהֹוָה, מִי כָּמֹכָה נֶאְדָּר בַּקֹּדֶשׁ; נוֹרָא תְהִלֹּת עֹשֵׂה פֶלֶא׃ (שמות פרק טו יא)</div>

<div class="verse"><strong>בְּהֵמָה גַּסָּה טְהוֹרָה אוֹמֶרֶת:</strong> הַרְנִינוּ לֵאלֹהִים עוּזֵּנוּ; הָרִיעוּ, לֵאלֹהֵי יַעֲקֹב׃ (תהלים פרק פא ב)</div>

<div class="verse"><strong>בְּהֵמָה דַּקָּה טְמֵאָה אוֹמֶרֶת:</strong> הֵיטִיבָה יְהֹוָה לַטּוֹבִים; וְלִישָׁרִים, בְּלִבּוֹתָם׃ (תהלים פרק קכה ד)</div>

<div class="verse"><strong>בְּהֵמָה גַּסָּה טְמֵאָה אוֹמֶרֶת:</strong> יְגִיעַ כַּפֶּיךָ כִּי תֹאכֵל, אַשְׁרֶיךָ וְטוֹב לָךְ׃ (תהלים פרק קכח ב)</div>

<div class="verse"><strong>גָּמָל אוֹמֵר:</strong> יְהֹוָה מִמָּרוֹם יִשְׁאָג וּמִמְּעוֹן קָדְשׁוֹ יִתֵּן קוֹלוֹ, שָׁאֹג יִשְׁאַג עַל נָוֵהוּ ׃ (ירמיה פרק כה ל)</div>

<div class="verse"><strong>סוּס אוֹמֵר:</strong> הִנֵּה כְעֵינֵי עֲבָדִים אֶל יַד אֲדוֹנֵיהֶם, כְּעֵינֵי שִׁפְחָה אֶל יַד גְּבִרְתָּהּ כֵּן עֵינֵינוּ אֶל יְהֹוָה אֱלֹהֵינוּ; עַד, שֶׁיְּחָנֵּנוּ׃ (תהלים פרק קכג ב)</div>

<div class="verse"><strong>פֶּרֶד אוֹמֵר:</strong> יוֹדוּךָ יְהֹוָה כָּל מַלְכֵי אָרֶץ; כִּי שָׁמְעוּ, אִמְרֵי פִיךָ׃ (תהלים פרק קלח ד)</div>

<div class="verse"><strong>חֲמוֹר אוֹמֵר:</strong> לְךָ יְהֹוָה הַגְּדֻלָּה וְהַגְּבוּרָה וְהַתִּפְאֶרֶת וְהַנֵּצַח וְהַהוֹד, כִּי כֹל בַּשָּׁמַיִם וּבָאָרֶץ; לְךָ יְהֹוָה הַמַּמְלָכָה, וְהַמִּתְנַשֵּׂא לְכֹל לְרֹאשׁ׃ (דברי הימים א , כט יא)</div>

<div class="verse"><strong>שׁוֹר אוֹמֵר:</strong> אָז יָשִׁיר מֹשֶׁה וּבְנֵי יִשְׂרָאֵל אֶת הַשִּׁירָה הַזֹּאת לַיְהֹוָה, וַיֹּאמְרוּ לֵאמֹר; אָשִׁירָה לַיְהֹוָה כִּי גָאֹה גָּאָה, סוּס וְרֹכְבוֹ רָמָה בַיָּם׃ (שמות פרק טו א)</div>

<div class="verse"><strong>חַיּוֹת הַשָּׂדֶה אוֹמְרִים:</strong> בָּרוּךְ הַטּוֹב וְהַמֵּטִיב :</div>

<div class="verse"><strong>צְבִי אוֹמֵר:</strong> וַאֲנִי אָשִׁיר עֻזֶּךָ וַאֲרַנֵּן לַבֹּקֶר, חַסְדֶּךָ כִּי הָיִיתָ מִשְׂגָּב לִי; וּמָנוֹס, בְּיוֹם צַר לִי׃ (תהלים פרק נט יז)</div>

<div class="verse"><strong>פִּיל אוֹמֵר:</strong> מַה גָּדְלוּ מַעֲשֶׂיךָ יְהֹוָה; מְאֹד, עָמְקוּ מַחְשְׁבֹתֶיךָ׃ (תהלים פרק צב ו)</div>

<div class="verse"><strong>אַרְיֵה אוֹמֵר:</strong> יְהֹוָה כַּגִּבּוֹר יֵצֵא, כְּאִישׁ מִלְחָמוֹת יָעִיר קִנְאָה; יָרִיעַ אַף יַצְרִיחַ, עַל אֹיְבָיו יִתְגַּבָּר׃ (ישעיה פרק מב יג)</div>

<div class="verse"><strong>דֹּב אוֹמֵר:</strong> יִשְׂאוּ מִדְבָּר וְעָרָיו, חֲצֵרִים תֵּשֵׁב קְדָּר; יָרֹנּוּ יֹשְׁבֵי סֶלַע, מֵרֹאשׁ הָרִים יִצְוָחוּ; יָשִׂימוּ לַיְהֹוָה כָּבוֹד; וּתְהִלָּתוֹ בָאִיִּים יַגִּידוּ׃ (ישעיה פרק מב יא יב)</div>

<div class="verse"><strong>זְאֵב אוֹמֵר:</strong> עַל כָּל דְּבַר פֶּשַׁע עַל שׁוֹר עַל חֲמוֹר עַל שֶׂה עַל שַׂלְמָה עַל כָּל אֲבֵדָה, אֲשֶׁר יֹאמַר כִּי הוּא זֶה, עַד הָאֱלֹהִים, יָבֹא דְּבַר שְׁנֵיהֶם; אֲשֶׁר יַרְשִׁיעֻן אֱלֹהִים, יְשַׁלֵּם שְׁנַיִם לְרֵעֵהוּ׃ (שמות פרק כב ח)</div>

<div class="verse"><strong>שׁוּעַל אוֹמֵר:</strong> הוֹי בֹּנֶה בֵיתוֹ בְּלֹא צֶדֶק, וַעֲלִיּוֹתָיו בְּלֹא מִשְׁפָּט; בְּרֵעֵהוּ יַעֲבֹד חִנָּם, וּפֹעֲלוֹ לֹא יִתֶּן לוֹ׃ (ירמיה פרק כב יג)</div>

<div class="verse"><strong>זַרְזִיר אוֹמֵר:</strong> רַנְּנוּ צַדִּיקִים בַּיְהֹוָה; לַיְשָׁרִים, נָאוָה תְהִלָּה׃ (תהלים פרק לג א)</div>

<div class="verse"><strong>חָתוּל אוֹמֵר:</strong> אֶרְדּוֹף אוֹיְבַי וְאַשִּׂיגֵם, וְלֹא אָשׁוּב עַד כַּלּוֹתָם׃ (תהלים יח לח)</div>
</div>

<div class="chapter-section">
<h3>פרק שירה – פֶּרֶק שִׁשִּׁי</h3>
<div class="verse"><strong>שְׁרָצִים אוֹמְרִים:</strong> יִשְׂמַח יִשְׂרָאֵל בְּעֹשָׂיו; בְּנֵי צִיּוֹן, יָגִילוּ בְמַלְכָּם׃ (תהלים פרק קמט ב)</div>

<div class="verse"><strong>אֵלִים שֶׁבַּשְּׁרָצִים אוֹמְרִים:</strong> אֶשְׁתְּךָ כְּגֶפֶן פֹּרִיָּה בְּיַרְכְּתֵי בֵיתֶךָ בָּנֶיךָ כִּשְׁתִלֵי זֵיתִים; סָבִיב, לְשֻׁלְחָנֶךָ׃ (תהלים פרק קכח ג)</div>

<div class="verse"><strong>נָחָשׁ אוֹמֵר:</strong> סוֹמֵךְ יְהֹוָה לְכָל הַנֹּפְלִים; וְזוֹקֵף, לְכָל הַכְּפוּפִים׃ (תהלים פרק קמה יד)</div>

<div class="verse"><strong>עַקְרָב אוֹמֵר:</strong> טוֹב יְהֹוָה לַכֹּל; וְרַחֲמָיו, עַל כָּל מַעֲשָׂיו׃ (תהלים פרק קמה ט)</div>

<div class="verse"><strong>שַׁבְּלוּל אוֹמֵר:</strong> כְּמוֹ שַׁבְּלוּל תֶּמֶס יַהֲלֹךְ; נֵפֶל אֵשֶׁת, בַּל חָזוּ שָׁמֶשׁ׃ (תהלים פרק נח ט)</div>

<div class="verse"><strong>נְמָלָה אוֹמֶרֶת:</strong> לֵךְ אֶל נְמָלָה עָצֵל; רְאֵה דְרָכֶיהָ וַחֲכָם׃ (משלי פרק ו ו)</div>

<div class="verse"><strong>עַכְבַּר אוֹמֵר:</strong> וְאַתָּה צַדִּיק, עַל כָּל הַבָּא עָלַי; כִּי אֱמֶת עָשִׂיתָ וַאֲנִי הִרְשָׁעְתִי׃ (נחמיה פרק ט לג)</div>

<div class="verse"><strong>חֻלְדָּה אוֹמֶרֶת:</strong> כֹּל הַנְּשָׁמָה תְּהַלֵּל יָהּ, הַלְלוּיָהּ׃ (תהלים קנ ו)</div>

<div class="verse"><strong>כְּלָבִים אוֹמְרִים:</strong> בֹּאוּ נִשְׁתַּחֲוֶה וְנִכְרָעָה; נִבְרְכָה, לִפְנֵי יְהֹוָה עֹשֵׂנוּ׃ (תהלים פרק צה ו)</div>
</div>

<div class="chapter-section">
<h3>ולאחר מכן יאמר הפסוקים האלו:
</h3>
<p>
רַבִּי יְשַׁעְיָה תַּלְמִידוֹ שֶׁל רַבִּי חֲנִינָא בֶּן דּוֹסָא הִתְעַנָּה חָמֵשׁ וּשְׁמוֹנִים תַּעְנִיּוֹת, אָמַר כְּלָבִים שֶׁכָּתוּב בָּהֶם וְהַכְּלָבִים עַזֵּי נֶפֶשׁ לֹא יָדְעוּ שָׂבְעָה יִזְכּוּ לוֹמַר שִׁירָה. וְעָנַה לוֹ מַלְאָךְ מִן הַשָּׁמַיִם, וְאָמַר לוֹ יְשַׁעְיָה עַד מָתַי אַתָּה מִתְעַנֶּה עַל זֶה הַדָּבָר, שְׁבוּעָה הִיא מִלִּפְנֵי הַמָּקוֹם בָּרוּךְ הוּא מִיּוֹם שֶׁגִּלָּה סוֹדוֹ לַחֲבַקוּק הַנָּבִיא לֹא גִלָּה דָבָר זֶה לְשׁוּם בְּרִיָּה בָּעוֹלָם, אֶלָּא בִּשְׁבִיל שֶׁתַּלְמִידוֹ שֶׁל אָדָם גָּדוֹל אַתָּה, שְׁלָחוּנִי מִן הַשָּׁמַיִם לִזְדַּקֵּק אֵלֶיךָ, וְאָמְרוּ כְּלָבִים כְּתִיב בָּהֶם וּלְכֹל בְּנֵי יִשְׂרָאֵל לֹא יֶחֱרַץ כֶּלֶב לְשׁוֹנוֹ, וְלֹא עוֹד אֶלָּא שֶׁזָכוּ לְעַבֵּד עוֹרוֹת מִצּוֹאָתָם, שֶׁכּוֹתְבִין בָּהֶם תְּפִלִּין וּמְזוּזוֹת וְסֶפֶר תּוֹרָה, עַל כֵּן זָכוּ לוֹמַר שִׁירָה. וּמַה שֶׁשָּׁאַלְתָּ חֲזוֹר לַאֲחוֹרֶיךָ וְאַל תּוֹסִיף בַּדָּבָר הַזֶּה עוֹד, כְּמוֹ שֶׁכָּתוּב שׁוֹמֵר פִּיו וּלְשׁוֹנוֹ שׁוֹמֵר מִצָּרוֹת נַפְשׁוֹ: בָּרוּךְ יְיָ לְעוֹלָם אָמֵן וְאָמֵן. בָּרוּךְ יְיָ מִצִּיּוֹן שׁוֹכֵן יְרוּשָׁלַיִם הַלְלוּיָּה. בָּרוּךְ יְיָ אֶלֹהִים אֶלֹהֵי יִשְׂרָאֵל עוֹשֶׂה נִפְלָאוֹת לְבַדּוֹ. וּבָרוּךְ שֵׁם כְּבוֹדוֹ לְעוֹלָם וִימָלֵּא כְבוֹדוֹ אֶת כָּל הָאָרֶץ אָמֵן וְאָמֵן:</p>
</div>

<div class="chapter-section">
<h3>ולאחר מכן אומרים בקשה זו:</h3>

<p>רִבּוֹן כָּל הָעוֹלָמִים, יְהִי רָצוֹן מִלְּפָנֶיךָ יְיָ אֶלֹהַי וֶאֶלֹהֵי אֲבוֹתַי, שֶׁבִּזְכוּת “פֶּרֶק שִׁירָה" אֲשֶׁר קָרִיתִי וְעָסַקְתִּי, שֶׁהוּא שִׁירַת הַדּוֹמֵם הַצּוֹמֵחַ וְהַחַי, וְהַמַּלְאָכִים הַקְּדוֹשִׁים הַמְּמֻנִּים עֲלֵיהֶם מֵאֵת ה' יִתְבָּרַךְ, וְהִתְקַשְּׁרוּת הַשְּׁכִינָה עִם כָּל הָעוֹלָמוֹת, וְקִשּׁוּר הַתַּחְתּוֹנִים עִם הָעֶלְיוֹנִים, וַאֲמִירָתוֹ כְּהַקְרָבַת קָרְבָּן עַל גַּבֵּי הַמִּזְבֵּחַ, שֶׁתְּהֵא שָׁעָה זוֹ שְׁעַת רַחֲמִים, שְׁעַת הַקְשָׁבָה, שְׁעַת הַאֲזָנָה, וְנִקְרָאֲךָ וְתַעֲנֵנוּ, נַעֲתִיר לְךָ וְהֵעָתֵר לָנוּ, שֶׁתִּהְיֶה עוֹלָה לְפָנֶיךָ קְרִיאָתֵנוּ וְעֶסְקֵנוּ בְּפֶרֶק שִׁירָה, כְּאִלּוּ הִשַּׂגְנוּ כָּל הַסּוֹדוֹת הַנִּפְלָאוֹת וְהַנּוֹרָאוֹת אֲשֶׁר הֵם חַתוּמִים בּוֹ בְּכָל תְּנָאָיו. הַחַזִירֵנוּ בִּתְשׁוּבָה שְׁלֵמָה לְפָנֶיךָ, וְנִזְכֶּה לְמָקוֹם שֶׁהַנְּפָשׁוֹת הָרוּחוֹת וְהַנְשָׁמוֹת נֶחֱצָבוֹת מִשָּׁם, וּכְאִילּוּ עָשִׂינוּ כָּל מַה שֶׁמּוּטָל עָלֵינוּ לְהַשִּׂיג, בֵּין בַּגִּלְגּוּל זֶה, בֵּין בְּגִלְגּוּלִים אֲחֵרִים. וְלִהְיוֹת מִן הָעוֹלִים וְהַזּוֹכִים לָעוֹלָם הַבָּא עִם שְׁאָר צַדִּיקִים וַחֲסִידִים. וּמָלֵא כָּל מִשְׁאֲלוֹת לִבֵּנוּ לַטּוֹבָה, (כאן יוסיף לבקש בפרטות מה שצריך) וְתִהְיֶה עִם לְבָבֵנוּ וְאִמְרֵי פִינוּ בְּעֵת מַחְשְׁבוֹתֵינוּ, וְעִם יָדֵינוּ בְּעֵת מַעְבָּדֵינוּ. וְתִשְׁלַח בְּרָכָה וְהַצְלָחָה וְהָרְוָחָה בְּכָל מַעֲשֵׂה יָדֵינוּ, וּמֵעָפָר עָנְיֵנוּ תְּקִימֵנוּ, וּמֵאַשְׁפּוֹת דַּלּוּתֵינוּ תְּרוֹמְמֵנוּ, וּבְכֹחַ הַשִּׁירָה יִתְמַתְּקוּ כָּל הַגְּבוּרוֹת וְתִתְפַּשֵּׁט הַבְּרָכָה בְּכֹל הָעוֹלָמוֹת. וְנִזְכֶּה לְשׁוֹרֵר לֶעָתִיד לָבֹא. וְתָשִׁיב שְׁכִינָתְךָ לְעִיר קָדְשֶׁךָ בִּמְהֵרָה בְּיָמֵינוּ, אָמֵן.</p>
</div>`;

let currentUser = null;
let userData = JSON.parse(localStorage.getItem('perekShiraData')) || {
    Motty: { count: 0, totalDays: 0, longestStreak: 0, startDate: null, lastCheckDate: null },
    Noa: { count: 0, totalDays: 0, longestStreak: 0, startDate: null, lastCheckDate: null }
};

// Save user data to localStorage
function saveData() {
    try {
        localStorage.setItem('perekShiraData', JSON.stringify(userData));
        console.log('User data saved to localStorage');
    } catch (error) {
        console.error('Error saving user data:', error);
    }
}

// Select user and show main content
function selectUser(user) {
    try {
        if (!user || !userData[user]) {
            throw new Error(`Invalid user: ${user}`);
        }
        currentUser = user;
        localStorage.setItem('currentUser', user);
        const userSelection = document.getElementById('userSelection');
        const mainContent = document.getElementById('mainContent');
        const currentUserElement = document.getElementById('currentUser');
        const perekShira = document.getElementById('perekShira');
        if (!userSelection || !mainContent || !currentUserElement || !perekShira) {
            throw new Error('DOM elements missing for selectUser');
        }
        userSelection.style.display = 'none';
        mainContent.style.display = 'block';
        currentUserElement.textContent = user;
        perekShira.innerHTML = PEREK_SHIRA_TEXT;
        updateDisplay();
        updateCountdown();
        console.log(`Selected user: ${user}`);
    } catch (error) {
        console.error('Error in selectUser:', error);
    }
}

// Show user selection screen
function showUserSelection() {
    try {
        currentUser = null;
        const mainContent = document.getElementById('mainContent');
        const whatsAppForm = document.getElementById('whatsAppForm');
        const userSelection = document.getElementById('userSelection');
        if (!mainContent || !whatsAppForm || !userSelection) {
            throw new Error('DOM elements missing for showUserSelection');
        }
        mainContent.style.display = 'none';
        whatsAppForm.style.display = 'none';
        userSelection.style.display = 'flex';
        console.log('Showing user selection screen');
    } catch (error) {
        console.error('Error in showUserSelection:', error);
    }
}

// Show WhatsApp form
function showWhatsAppForm() {
    try {
        const userSelection = document.getElementById('userSelection');
        const whatsAppForm = document.getElementById('whatsAppForm');
        if (!userSelection || !whatsAppForm) {
            throw new Error('DOM elements missing for showWhatsAppForm');
        }
        userSelection.style.display = 'none';
        whatsAppForm.style.display = 'flex';
        console.log('Showing WhatsApp form');
    } catch (error) {
        console.error('Error in showWhatsAppForm:', error);
    }
}

// Get sunset time for a given date in Jerusalem
function getSunsetTime(date) {
    const dateStr = date.toISOString().split('T')[0];
    console.log(`Getting sunset time for date: ${dateStr}`);
    
    // Hardcoded sunset for July 22, 2025, in Jerusalem (19:44 local time)
    if (dateStr === '2025-07-22') {
        // Create the sunset time directly as local Jerusalem time
        const sunset = new Date(`${dateStr}T19:44:00+03:00`); // 19:44 IDT
        console.log(`Hardcoded sunset for ${dateStr}: ${sunset.toISOString()} (${sunset.toLocaleString('he-IL', { timeZone: 'Asia/Jerusalem' })})`);
        return Promise.resolve(sunset);
    }
    
    // Fallback to API
    return fetch(`https://api.sunrise-sunset.org/json?lat=31.7683&lng=35.2137&date=${dateStr}&formatted=0`)
        .then(response => response.json())
        .then(data => {
            if (data.status === 'OK') {
                // The API returns UTC time, just parse it directly
                const sunsetUTC = new Date(data.results.sunset);
                console.log(`API sunset for ${dateStr}: ${sunsetUTC.toISOString()} (${sunsetUTC.toLocaleString('he-IL', { timeZone: 'Asia/Jerusalem' })})`);
                return sunsetUTC;
            } else {
                console.error('Sunset API error:', data.status);
                const sunset = new Date(`${dateStr}T19:44:00+03:00`); // Fallback to 19:44 IDT
                console.log(`Fallback sunset for ${dateStr}: ${sunset.toISOString()} (${sunset.toLocaleString('he-IL', { timeZone: 'Asia/Jerusalem' })})`);
                return sunset;
            }
        })
        .catch(error => {
            console.error('Error fetching sunset time:', error);
            const sunset = new Date(`${dateStr}T19:44:00+03:00`); // Fallback to 19:44 IDT
            console.log(`Error fallback sunset for ${dateStr}: ${sunset.toISOString()} (${sunset.toLocaleString('he-IL', { timeZone: 'Asia/Jerusalem' })})`);
            return sunset;
        });
}

// Update countdown timer to sunset
async function updateCountdown() {
    try {
        const now = new Date();
        const nowIsrael = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Jerusalem' }));
        const today = new Date(nowIsrael);
        today.setHours(0, 0, 0, 0);
        
        const countdownElement = document.getElementById('countdownTimer');
        const sunsetTimeElement = document.getElementById('sunsetTime');
        const logNowIsrael = document.getElementById('logNowIsrael');
        const logSunsetToday = document.getElementById('logSunsetToday');
        const logSunsetTomorrow = document.getElementById('logSunsetTomorrow');
        
        if (!countdownElement || !sunsetTimeElement || !logNowIsrael || !logSunsetToday || !logSunsetTomorrow) {
            throw new Error('DOM elements missing for updateCountdown');
        }

        const sunsetToday = await getSunsetTime(today);
        
        // Display sunset time in Jerusalem timezone
        const sunsetTimeString = sunsetToday.toLocaleString('he-IL', {
            timeZone: 'Asia/Jerusalem',
            hour: '2-digit',
            minute: '2-digit',
            hour12: false
        });
        
        sunsetTimeElement.textContent = sunsetTimeString;
        console.log(`Sunset time display set to: ${sunsetTimeString}`);

        // Update debug logs
        logNowIsrael.textContent = `זמן נוכחי בישראל: ${now.toISOString()} (${nowIsrael.toLocaleString('he-IL', { timeZone: 'Asia/Jerusalem' })})`;
        logSunsetToday.textContent = `שקיעה היום: ${sunsetToday.toISOString()} (${sunsetToday.toLocaleString('he-IL', { timeZone: 'Asia/Jerusalem' })})`;

        let timeLeft, hours, minutes, seconds;
        
        // Convert current time to Israel timezone for comparison
        const nowUTC = new Date();
        
        if (nowUTC < sunsetToday) {
            timeLeft = sunsetToday - nowUTC;
            hours = Math.floor(timeLeft / (1000 * 60 * 60));
            minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
            countdownElement.textContent = `${hours} שעות ${minutes} דקות ${seconds} שניות`;
            logSunsetTomorrow.textContent = 'שקיעה מחר: טוען... (לפני השקיעה של היום)';
        } else {
            const tomorrow = new Date(today);
            tomorrow.setDate(tomorrow.getDate() + 1);
            const sunsetTomorrow = await getSunsetTime(tomorrow);
            timeLeft = sunsetTomorrow - nowUTC;
            hours = Math.floor(timeLeft / (1000 * 60 * 60));
            minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
            countdownElement.textContent = `${seconds} : ${minutes} : ${hours} `;
            logSunsetTomorrow.textContent = `שקיעה מחר: ${sunsetTomorrow.toISOString()} (${sunsetTomorrow.toLocaleString('he-IL', { timeZone: 'Asia/Jerusalem' })})`;
        }

        // Handle WhatsApp notifications
        const topic = localStorage.getItem('whatsappTopic');
        const whatsappNumber = localStorage.getItem('whatsappNumber');
        const logNotifications = document.getElementById('logNotifications') || document.createElement('p');
        logNotifications.id = 'logNotifications';
        logNotifications.textContent = `נתוני ווטסאפ: מספר: ${whatsappNumber || 'לא נרשם'}, טופיק: ${topic || 'לא נרשם'}`;
        
        if (!document.getElementById('logNotifications')) {
            document.getElementById('debugContent').appendChild(logNotifications);
        }

        if (topic) {
            const nowHours = nowIsrael.getHours();
            const nowMinutes = nowIsrael.getMinutes();
            
            // 10:00 AM notification
            if (nowHours === 10 && nowMinutes === 0 && seconds < 2) {
                const message = `בוקר טוב! השקיעה היום ב-${sunsetTimeString}`;
                console.log(`Attempting 10:00 AM notification: ${message}`);
                await sendNotification(topic, message);
                logNotifications.textContent = `נתוני ווטסאפ: מספר: ${whatsappNumber}, טופיק: ${topic}, הודעה אחרונה: ${message}`;
            }

            // 4 hours before sunset notification
            const fourHoursBeforeSunset = new Date(sunsetToday.getTime() - 4 * 60 * 60 * 1000);
            const fourHoursBeforeLocal = new Date(fourHoursBeforeSunset.toLocaleString('en-US', { timeZone: 'Asia/Jerusalem' }));
            
            if (nowIsrael.getHours() === fourHoursBeforeLocal.getHours() && 
                nowIsrael.getMinutes() === fourHoursBeforeLocal.getMinutes() && 
                seconds < 2) {
                const message = `4 שעות עד השקיעה ב-${sunsetTimeString}`;
                console.log(`Attempting 4-hour notification: ${message}`);
                await sendNotification(topic, message);
                logNotifications.textContent = `נתוני ווטסאפ: מספר: ${whatsappNumber}, טופיק: ${topic}, הודעה אחרונה: ${message}`;
            }
        }
        
    } catch (error) {
        console.error('Error in updateCountdown:', error);
    }
}

// Check streak status
async function checkStreakStatus() {
    try {
        if (!currentUser) {
            console.log('No user selected for streak check');
            return 'no_user';
        }

        const user = userData[currentUser];
        const now = new Date();
        const nowIsrael = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Jerusalem' }));
        const today = new Date(nowIsrael);
        today.setHours(0, 0, 0, 0);

        if (!user.lastCheckDate) {
            console.log('New user, no previous check');
            return 'new';
        }

        const lastCheck = new Date(user.lastCheckDate);
        if (lastCheck.toDateString() === today.toDateString()) {
            console.log('Already checked today');
            return 'already_checked';
        }

        const yesterday = new Date(today);
        yesterday.setDate(yesterday.getDate() - 1);
        if (lastCheck.toDateString() === yesterday.toDateString()) {
            console.log('Checked yesterday, can continue streak');
            return 'continue';
        }

        const yesterdaySunset = await getSunsetTime(yesterday);
        const logCheckStreak = document.getElementById('logCheckStreak');
        logCheckStreak.textContent = `בדיקת רצף - זמן נוכחי בישראל: ${nowIsrael.toISOString()} (${nowIsrael.toLocaleString('en-US', { timeZone: 'Asia/Jerusalem' })}), שקיעה אתמול: ${yesterdaySunset.toISOString()} (${yesterdaySunset.toLocaleString('en-US', { timeZone: 'Asia/Jerusalem' })})`;

        if (nowIsrael > yesterdaySunset && lastCheck < yesterdaySunset) {
            console.log('Missed yesterday’s deadline, resetting streak');
            user.count = 0;
            user.startDate = null;
            saveData();
            return 'reset';
        }

        console.log('Continuing streak');
        return 'continue';
    } catch (error) {
        console.error('Error in checkStreakStatus:', error);
        return 'error';
    }
}

// Mark as read
async function markAsRead() {
    try {
        if (!currentUser) {
            console.log('No user selected for markAsRead');
            return;
        }

        const user = userData[currentUser];
        const now = new Date();
        const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

        const status = await checkStreakStatus();
        if (status === 'already_checked') {
            console.log('Already marked as read today');
            return;
        }

        if (status === 'new' || status === 'reset') {
            user.count = 1;
            user.startDate = now.toISOString();
            console.log('Starting new streak');
        } else if (status === 'continue') {
            user.count = (user.count || 0) + 1;
            console.log(`Incrementing streak to ${user.count}`);
        }

        user.totalDays = (user.totalDays || 0) + 1;
        user.longestStreak = Math.max(user.longestStreak || 0, user.count);
        user.lastCheckDate = now.toISOString();
        saveData();
        updateDisplay();
        console.log(`Marked as read for ${currentUser}: count=${user.count}, totalDays=${user.totalDays}`);
    } catch (error) {
        console.error('Error in markAsRead:', error);
    }
}

// Reset streak
function resetStreak() {
    try {
        if (!currentUser) {
            console.log('No user selected for resetStreak');
            return;
        }

        const user = userData[currentUser];
        user.count = 0;
        user.startDate = null;
        user.lastCheckDate = null;
        saveData();
        updateDisplay();
        const statusDiv = document.getElementById('status');
        statusDiv.textContent = 'הרצף אופס!';
        statusDiv.style.color = 'var(--danger-color)';
        console.log(`Reset streak for ${currentUser}`);
    } catch (error) {
        console.error('Error in resetStreak:', error);
    }
}

// Update display
async function updateDisplay() {
    try {
        if (!currentUser) {
            console.log('No user selected for updateDisplay');
            return;
        }

        const user = userData[currentUser];
        const counter = document.getElementById('counter');
        const totalDays = document.getElementById('totalDays');
        const longestStreak = document.getElementById('longestStreak');
        const progressFill = document.getElementById('progressFill');
        const progressPercent = document.getElementById('progressPercent');
        const button = document.getElementById('checkButton');
        const statusDiv = document.getElementById('status');

        if (!counter || !totalDays || !longestStreak || !progressFill || !progressPercent || !button || !statusDiv) {
            throw new Error('DOM elements missing for updateDisplay');
        }

        counter.textContent = user.count;
        totalDays.textContent = user.totalDays;
        longestStreak.textContent = user.longestStreak;

        const progressPercentValue = (user.count / 40) * 100;
        progressFill.style.width = progressPercentValue + '%';
        progressPercent.textContent = `${Math.round(progressPercentValue)}%`;

        const status = await checkStreakStatus();
        switch (status) {
            case 'already_checked':
                button.disabled = true;
                button.textContent = 'סומן כנקרא היום ✅';
                statusDiv.innerHTML = '🎯 יום מושלם! חזור מחר להמשיך';
                console.log('Display updated: already checked');
                break;
            case 'reset':
                button.disabled = false;
                button.textContent = 'התחל מחדש 🔄';
                statusDiv.innerHTML = '⚠️ המונה אופס - פספסת את המועד אתמול. התחל מחדש!';
                console.log('Display updated: streak reset');
                break;
            default:
                button.disabled = false;
                button.textContent = 'סמן כנקרא';
                statusDiv.innerHTML = '';
                console.log('Display updated: ready to mark');
        }
    } catch (error) {
        console.error('Error in updateDisplay:', error);
    }
}

// Toggle theme
function toggleTheme() {
    try {
        document.documentElement.classList.toggle('dark-mode'); // Toggle on <html> for higher specificity
        document.body.classList.toggle('dark-mode'); // Keep for compatibility
        const themeIcon = document.querySelector('.theme-icon');
        if (!themeIcon) {
            throw new Error('Theme icon not found');
        }
        themeIcon.textContent = document.documentElement.classList.contains('dark-mode') ? '☀️' : '🌙';
        localStorage.setItem('theme', document.documentElement.classList.contains('dark-mode') ? 'dark' : 'light');
        
        // Force repaint
        document.body.style.display = 'none';
        document.body.offsetHeight; // Trigger reflow
        document.body.style.display = '';
        
        // Log computed styles
        const computedStyle = getComputedStyle(document.body);
        const bgColor = computedStyle.getPropertyValue('--bg-color').trim();
        const textColor = computedStyle.getPropertyValue('--text-color').trim();
        console.log(`Toggled theme to ${document.documentElement.classList.contains('dark-mode') ? 'dark' : 'light'}, --bg-color: ${bgColor}, --text-color: ${textColor}`);
        
        // Update debug log
        const logTheme = document.getElementById('logTheme') || document.createElement('p');
        logTheme.id = 'logTheme';
        logTheme.textContent = `מצב תצוגה: ${document.documentElement.classList.contains('dark-mode') ? 'חשוך' : 'בהיר'}, צבע רקע: ${bgColor}, צבע טקסט: ${textColor}`;
        document.getElementById('debugContent').appendChild(logTheme);
    } catch (error) {
        console.error('Error in toggleTheme:', error);
    }
}


// Toggle debug logs
function toggleDebugLogs() {
    try {
        const debugContent = document.getElementById('debugContent');
        if (!debugContent) {
            throw new Error('Debug content element not found');
        }
        debugContent.style.display = debugContent.style.display === 'none' ? 'block' : 'none';
        console.log(`Debug logs ${debugContent.style.display === 'block' ? 'shown' : 'hidden'}`);
    } catch (error) {
        console.error('Error in toggleDebugLogs:', error);
    }
}

// Confirm reset
function confirmReset() {
    try {
        if (confirm('האם אתה בטוח שברצונך לאפס את הרצף? ההתקדמות הנוכחית תימחק.')) {
            resetStreak();
            console.log('User confirmed streak reset');
        } else {
            console.log('User cancelled streak reset');
        }
    } catch (error) {
        console.error('Error in confirmReset:', error);
    }
}

// Generate unique topic for ntfy.sh
function generateTopic(phoneNumber) {
    const randomId = Math.random().toString(36).substr(2, 5);
    const topic = `sunset-app-${phoneNumber}-${randomId}`;
    console.log(`Generated topic for ${phoneNumber}: ${topic}`);
    return topic;
}

// Validate Israeli phone number (9 digits)
function validatePhoneNumber(phone) {
    const regex = /^[0-9]{9}$/;
    const isValid = regex.test(phone);
    console.log(`Validating phone number ${phone}: ${isValid ? 'Valid' : 'Invalid'}`);
    return isValid;
}

// Register WhatsApp number and generate subscription link
function registerWhatsApp() {
    try {
        const phoneInput = document.getElementById('phoneNumber');
        const statusElement = document.getElementById('whatsappStatus');
        if (!phoneInput || !statusElement) {
            throw new Error('DOM elements missing for registerWhatsApp');
        }

        const phoneNumber = phoneInput.value.trim();
        console.log(`WhatsApp form submitted with phone: ${phoneNumber}`);

        if (!validatePhoneNumber(phoneNumber)) {
            statusElement.textContent = 'אנא הזן מספר טלפון תקין (9 ספרות)';
            statusElement.style.color = 'var(--danger-color)';
            console.log('Phone number validation failed');
            return;
        }

        const fullNumber = `+972${phoneNumber}`;
        const topic = generateTopic(phoneNumber);

        localStorage.setItem('whatsappNumber', fullNumber);
        localStorage.setItem('whatsappTopic', topic);
        console.log(`Stored WhatsApp data: number=${fullNumber}, topic=${topic}`);

        const subscribeLink = `https://ntfy.sh/${topic}/whatsapp`;
        statusElement.innerHTML = `המספר ${fullNumber} נרשם בהצלחה! <br>לחץ <a href="${subscribeLink}" target="_blank">כאן</a> להצטרף להודעות בווטסאפ`;
        statusElement.style.color = 'var(--success-color)';
        console.log(`WhatsApp registered: ${fullNumber}, Topic: ${topic}, Link: ${subscribeLink}`);
    } catch (error) {
        console.error('Error in registerWhatsApp:', error);
        const statusElement = document.getElementById('whatsappStatus');
        if (statusElement) {
            statusElement.textContent = 'שגיאה בהרשמה לווטסאפ, אנא נסה שוב';
            statusElement.style.color = 'var(--danger-color)';
        }
    }
}

// Send notification via ntfy.sh
async function sendNotification(topic, message) {
    try {
        const response = await fetch(`https://ntfy.sh/${topic}`, {
            method: 'POST',
            body: message,
            headers: {
                'Content-Type': 'text/plain'
            }
        });
        console.log(`Notification sent to topic ${topic}: ${message}, Status: ${response.status}`);
    } catch (error) {
        console.error(`Error sending notification to topic ${topic}:`, error);
    }
}

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    try {
        // Attach event listeners
        const themeToggle = document.getElementById('themeToggle');
        const debugToggle = document.getElementById('debugToggle');
        const resetButton = document.querySelector('.reset-button');
        const whatsappButton = document.querySelector('button[onclick="showWhatsAppForm()"]') || document.querySelector('.user-btn:nth-child(3)');
        const whatsappSubmit = document.querySelector('.whatsapp-submit');
        const backButtons = document.querySelectorAll('.back-button');
        const mottyButton = document.querySelector('button[onclick="selectUser(\'Motty\')"]') || document.querySelector('.user-btn:nth-child(1)');
        const noaButton = document.querySelector('button[onclick="selectUser(\'Noa\')"]') || document.querySelector('.user-btn:nth-child(2)');

        if (themeToggle) themeToggle.addEventListener('click', toggleTheme);
        if (debugToggle) debugToggle.addEventListener('click', toggleDebugLogs);
        if (resetButton) resetButton.addEventListener('click', confirmReset);
        if (whatsappButton) whatsappButton.addEventListener('click', showWhatsAppForm);
        if (whatsappSubmit) whatsappSubmit.addEventListener('click', registerWhatsApp);
        if (backButtons) backButtons.forEach(button => button.addEventListener('click', showUserSelection));
        if (mottyButton) mottyButton.addEventListener('click', () => selectUser('Motty'));
        if (noaButton) noaButton.addEventListener('click', () => selectUser('Noa'));

        const savedUser = localStorage.getItem('currentUser');
        if (savedUser && userData[savedUser]) {
            selectUser(savedUser);
        }
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            document.documentElement.classList.add('dark-mode');
            document.body.classList.add('dark-mode');
            const themeIcon = document.querySelector('.theme-icon');
            if (themeIcon) themeIcon.textContent = '☀️';
        }
        // Log initial theme state
        const computedStyle = getComputedStyle(document.body);
        const bgColor = computedStyle.getPropertyValue('--bg-color').trim();
        const textColor = computedStyle.getPropertyValue('--text-color').trim();
        console.log(`Initial theme: ${document.documentElement.classList.contains('dark-mode') ? 'dark' : 'light'}, --bg-color: ${bgColor}, --text-color: ${textColor}`);
        setInterval(updateCountdown, 1000);
        console.log('App initialized, event listeners attached');
    } catch (error) {
        console.error('Error in DOMContentLoaded:', error);
    }
});