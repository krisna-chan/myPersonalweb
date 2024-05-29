const footer = document.getElementById('footer');
const footerContent = `
<footer class="container-fluid mt-4" style="color: whitesmoke">
<div class="container upper-content">
    <p
        style="
        text-align: start;
        font-size: 0.8rem;
        color: #000000;
        border-bottom: 1px solid rgba(0,0,0,.16);
        "
        >
        1. Trade-in values will vary based on the condition, year, and
        configuration of your eligible trade-in device. Not all devices are
        eligible for credit. You must be at least 18 years old to be
        eligible to trade in for credit or for an Apple Gift Card. Trade-in
        value may be applied toward qualifying new device purchase, or added
        to an Apple Gift Card. Actual value awarded is based on receipt of a
        qualifying device matching the description provided when estimate
        was made. Sales tax may be assessed on full value of a new device
        purchase. In-store trade-in requires presentation of a valid photo
        ID (local law may require saving this information). Offer may not be
        available in all stores, and may vary between in-store and online
        trade-in. Some stores may have additional requirements. Apple or its
        trade-in partners reserve the right to refuse or limit quantity of
        any trade-in transaction for any reason. More details are available
        from Apple’s trade-in partner for trade-in and recycling of eligible
        devices. Restrictions and limitations may apply.
        <br />
        Available in the U.S. on apple.com, in the Apple Store app, and at
        Apple Stores.
        <br />
        To access and use all Apple Card features and products available
        only to Apple Card users, you must add Apple Card to Wallet on an
        iPhone or iPad that supports and has the latest version of iOS or
        iPadOS. Apple Card is subject to credit approval, available only for
        qualifying applicants in the United States, and issued by Goldman
        Sachs Bank USA, Salt Lake City Branch.
        <br />
        If you reside in the U.S. territories, please call Goldman Sachs at
        877-255-5923 with questions about Apple Card.
        <br />
        Learn more about how Apple Card applications are evaluated at
        support.apple.com/kb/HT209218.
        <br />
        A subscription is required for Apple TV+.
        <br />
        A subscription is required for Apple Arcade, Apple Fitness+, and
        Apple Music.
    </p>
</div>
<bottom-footer class="container d-flex">
<!-- first col -->
<ul>
    <li class="footer-title">
        Shop and Learn
        <ul>
            <li>
                Store
            </li>
            <li>
                Mac
            </li>
            <li>
                iPad
            </li>
            <li>
                iPhone
            </li>
            <li>
                Watch
            </li>
            <li>
                Vision
            </li>
            <li>
                TV & Home
            </li>
            <li>
                AirTag
            </li>
            <li>
                Accessories
            </li>
            <li>
                Gift Cards
            </li>
        </ul>
    </li>
    <li class="footer-title">
        Apple Wallet
        <ul>
            <li>
                Wallet
            </li>
            <li>
                Apple Card
            </li>
            <li>
                Apple Pay
            </li>
            <li>
                Apple Cash
            </li>
        </ul>
    </li>
</ul>
<!-- second col -->
<ul >
    <li class="footer-title">
        Account
        <ul>

            <li>
                Manage Your Apple ID
            </li>
            <li>
                Apple Store Account
            </li>
            <li>
                iCloud.com
            </li>

        </ul>
    </li>
    <li class="footer-title">
        Entertainment
        <ul>
            <li>
                Apple One
            </li>
            <li>
                Apple TV+
            </li>
            <li>
                Apple Music
            </li>
            <li>
                Apple Arcade
            </li>
            <li>
                Apple Fitness+
            </li>
            <li>
                Apple News+
            </li>
            <li>
                Apple Podcasts
            </li>
            <li>
                Apple Books
            </li>
            <li>
                Apple Store
            </li>
        </ul>
    </li>
</ul>
<!-- third col -->
<ul>
    <li class="footer-title">
        Apple Store

        <ul>
            <li>
                Find a Store
            </li>
            <li>
                Genius Bar
            </li>
            <li>
                Today at Apple
            </li>
            <li>
                Group Reservation
            </li>
            <li>
                Apple Camp
            </li>
            <li>
                Apple Store App
            </li>
            <li>
                Certified Deals at Apple
            </li>
            <li>
                Order Status
            </li>
            <li>
                Shopping Help
            </li>
        </ul>
    </li>
</ul>
<!-- fourth col -->
<ul>
    <li class="footer-title">
        For Business
        <ul>
            <li>
                Apple and Business
            </li>
            <li>
                Shop for Business
            </li>
        </ul>
    </li>
    <li class="footer-title">
        For Educatiom
        <ul>
            <li>
                Apple and Education
            </li>
            <li>
                Shop for K-12
            </li>
            <li>
                Shop for College
            </li>
        </ul>
    </li>
    <li class="footer-title">
        For Healthcare
        <ul>
            <li>
                Apple in Healthcare
            </li>
            <li>
                Health on Apple Watch
            </li>
            <li>
                Health Records on iPhone
            </li>
        </ul>
    </li>
    <li class="footer-title">
        For Government
        <ul>
            <li>
                Shop for Government
            </li>
            <li>
                Shop for Veterans and Military
            </li>
        </ul>
    </li>
</ul>
<!-- fifth col -->
<ul>
    <li class="footer-title">
        Apple Values
        <ul>
            <li>
                Accessibility
            </li>
            <li>
                Educatiom
            </li>
            <li>
                Enviroment
            </li>
            <li>
                Inclusion and Diversity
            </li>
            <li>
                Privacy
            </li>
            <li>
                Racial Equity and Justice
            </li>
            <li>
                Supply Chain
            </li>
        </ul>
    </li>
    <li class="footer-title">
        About Apple
        <ul>
            <li>
                Newsroom
            </li>
            <li>
                Apple Leadership
            </li>
            <li>
                Career Opportunity
            </li>
            <li>
                Investors
            </li>
            <li>
                Ethics & Compliance
            </li>
            <li>
                Events
            </li>
            <li>
                Contact Apple
            </li>
        </ul>
    </li>
</ul>
</bottom-footer>
<link href="./test.scss" rel="stylesheet" />
</footer>
`;

footer.innerHTML = footerContent;