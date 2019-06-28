// enum GunType {
//     AK47,
//     M4A1
// };

// interface Shootable {
//     shoot();
// }

// abstract class Gun implements Shootable {
//     abstract shoot();
// }

// class M4A1 extends Gun {
//     shoot() {
//         console.log('M4A1');
//     }
// }

// class AK47 extends Gun {
//     shoot() {
//         console.log('AK47');
//     }
// }

// class GunFactory {
//     static createGun(type: GunType): Gun {
//         switch(type) {
//             case GunType.AK47:
//                 return new AK47();
//             case GunType.M4A1:
//                 return new M4A1();
//             default:
//                 throw('not support this type')
//         }
//     }
// }
// GunFactory.createGun(GunType.AK47).shoot()
// GunFactory.createGun(GunType.M4A1).shoot()