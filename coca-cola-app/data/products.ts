export interface Product {
    id: string
    name: string
    subName: string
    price: string
    description: string
    folderPath: string
    themeColor: string
    gradient: string
    features: string[]
    stats: { label: string; val: string }[]
    section1: { title: string; subtitle: string }
    section2: { title: string; subtitle: string }
    section3: { title: string; subtitle: string }
    section4: { title: string; subtitle: string }
    detailsSection: {
        title: string
        description: string
        imageAlt: string
    }
    freshnessSection: {
        title: string
        description: string
    }
    buyNowSection: {
        price: string
        unit: string
        processingParams: string[]
        deliveryPromise: string
        returnPolicy: string
    }
}

export const products: Product[] = [
    {
        id: "classic",
        name: "Coca-Cola Original",
        subName: "The taste of happiness.",
        price: "₹60",
        description: "Iconic flavor • Ice cold refreshment • Legendary taste",
        folderPath: "/images/classic",
        themeColor: "#E61C2D",
        gradient: "linear-gradient(135deg,#E61C2D,#9B0000)",
        features: ["Iconic Taste", "Perfect Fizz", "Ice Cold Refreshment"],
        stats: [
            { label: "Sugar", val: "39g" },
            { label: "Carbonation", val: "100%" },
            { label: "Legendary", val: "1886" }
        ],
        section1: {
            title: "Coca-Cola Classic",
            subtitle: "The taste the world loves."
        },
        section2: {
            title: "Perfectly balanced fizz.",
            subtitle: "The signature sparkling refreshment loved for generations."
        },
        section3: {
            title: "Moments made better.",
            subtitle: "From celebrations to everyday breaks."
        },
        section4: {
            title: "The original refreshment.",
            subtitle: "Unmatched taste since 1886."
        },
        detailsSection: {
            title: "The Original Formula",
            description: "The legendary Coca-Cola taste combines a unique blend of flavors and perfect carbonation, delivering a refreshment experience that has stood the test of time.",
            imageAlt: "Coca Cola Bottle"
        },
        freshnessSection: {
            title: "Served Ice Cold",
            description: "The best Coca-Cola experience begins at the perfect chilled temperature, unlocking the refreshing fizz and signature taste."
        },
        buyNowSection: {
            price: "₹60",
            unit: "per bottle",
            processingParams: ["Perfectly Carbonated", "Chilled", "Classic Formula"],
            deliveryPromise: "Fast delivery available across major cities.",
            returnPolicy: "Damaged product? Instant replacement."
        }
    },
    {
        id: "zero",
        name: "Coca-Cola Zero",
        subName: "Zero sugar. Maximum taste.",
        price: "₹60",
        description: "No sugar • Perfect crunch • Legendary taste",
        folderPath: "/images/zero",
        themeColor: "#000000",
        gradient: "linear-gradient(135deg, #000000, #333333)",
        features: ["Zero Sugar", "Maximum Taste", "Light and Crisp"],
        stats: [
            { label: "Sugar", val: "0g" },
            { label: "Calories", val: "0" },
            { label: "Legendary", val: "2005" }
        ],
        section1: {
            title: "Coca-Cola Zero Sugar",
            subtitle: "The real taste, without the sugar."
        },
        section2: {
            title: "Great taste.",
            subtitle: "A deliciously light experience."
        },
        section3: {
            title: "Guilt-free refreshment.",
            subtitle: "Enjoy the iconic taste anytime."
        },
        section4: {
            title: "Zero compromise.",
            subtitle: "Because you deserve it all."
        },
        detailsSection: {
            title: "Zero Sugar Formula",
            description: "Our innovative recipe delivers the unmistakable taste of Coca-Cola Original, but entirely sugar-free. It's the perfect harmony of flavor and balance.",
            imageAlt: "Coca Cola Zero Bottle"
        },
        freshnessSection: {
            title: "Served Ice Cold",
            description: "The crispest experience comes from keeping it at an icy temperature, allowing the carbonation to dance on your palate."
        },
        buyNowSection: {
            price: "₹60",
            unit: "per bottle",
            processingParams: ["Zero Sugar", "Chilled", "Crisp Taste"],
            deliveryPromise: "Fast delivery available across major cities.",
            returnPolicy: "Damaged product? Instant replacement."
        }
    },
    {
        id: "cherry",
        name: "Cherry Coca-Cola",
        subName: "Bold cherry twist.",
        price: "₹65",
        description: "Fruity edge • Deep flavor • Smooth refreshment",
        folderPath: "/images/cherry",
        themeColor: "#C2185B",
        gradient: "linear-gradient(135deg, #C2185B, #6A002A)",
        features: ["Cherry Twist", "Smooth Finish", "Bold Flavor"],
        stats: [
            { label: "Flavor", val: "Cherry" },
            { label: "Carbonation", val: "100%" },
            { label: "Legendary", val: "1985" }
        ],
        section1: {
            title: "Cherry Coca-Cola",
            subtitle: "A bold new spin on the classic."
        },
        section2: {
            title: "Fruity perfection.",
            subtitle: "A splash of cherry flavor that transforms your drink."
        },
        section3: {
            title: "Expressive taste.",
            subtitle: "For those who like a little extra in their refreshment."
        },
        section4: {
            title: "Unapologetically bold.",
            subtitle: "Dive into a sweeter, deeper flavor profile."
        },
        detailsSection: {
            title: "The Cherry Twist",
            description: "We've taken our signature recipe and infused it with the deep, sweet tang of cherry, creating a delightful variation that pops with every sip.",
            imageAlt: "Cherry Coca Cola Bottle"
        },
        freshnessSection: {
            title: "Served Ice Cold",
            description: "Best enjoyed heavily chilled, where the fruity notes perfectly align with the brisk carbonation."
        },
        buyNowSection: {
            price: "₹65",
            unit: "per bottle",
            processingParams: ["Cherry Infused", "Chilled", "Bold Taste"],
            deliveryPromise: "Fast delivery available across major cities.",
            returnPolicy: "Damaged product? Instant replacement."
        }
    }
];
