enum Membership {
    Simple,
    Standard,
    Premium,
}

const membership = Membership.Standard
const membershipReverse = Membership[2]
console.log(membershipReverse)

enum SocialMedia {
    VK = 'VK',
    FACEBOOK = 'FACEBOOK',
    INSTAGRAM = 'IG'
}