import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
const config = {
	apiKey: "AIzaSyB98Z0zmRQBpEyCIeFkFjqiKYHj1n63_L0",
	authDomain: "fillyuriy-64395.firebaseapp.com",
	databaseURL: "https://fillyuriy-64395.firebaseio.com",
	projectId: "fillyuriy-64395",
	storageBucket: "fillyuriy-64395.appspot.com",
	messagingSenderId: "627713078308",
	appId: "1:627713078308:web:6c689a7a45903c147214b1"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;
	const userRef = firestore.doc(`users/${userAuth.uid}`);
	const snapshot = await userRef.get();

	if (!snapshot.exists) {
		const { displayName, email } = userAuth;
		const createAt = new Date();

		try {
			await userRef.set({
				displayName,
				email,
				createAt,
				...additionalData
			});
		} catch (error) {
			console.log('error create user', error.message);
		}
	}

	return userRef;
};

firebase.initializeApp(config);


export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
	const collectionRef = firestore.collection(collectionKey);

	const batch = firestore.batch()
	objectsToAdd.forEach(obj => {
		const newDocRef = collectionRef.doc();
		batch.set(newDocRef, obj);
	});

	return await batch.commit()
}

export const convertCollectionsSnapshotToMap = (collections) => {
	const transformedCollection = collections.docs.map(doc => {
		const { title, items } = doc.data();

		return {
			routeName: encodeURI(title.toLowerCase()),
			id: doc.id,
			title,
			items
		}
	});
	return transformedCollection.reduce((accumulator, collection) => {
		accumulator[collection.title.toLowerCase()] = collection;
		return accumulator;
	}, {})
}
export const ColorsDocument = () => {
	const userRef = firestore.collection(`colors`);
	return userRef.get();
};
export const PrintsDocument = () => {
	const userRef = firestore.collection(`prints`);
	return userRef.get();
};
export const SizesDocument = () => {
	const userRef = firestore.collection(`sizes`);
	return userRef.get();
};
export const submitOrder = (orders) => {
	const ordersRef = firestore.collection(`orders`);
	return orders && orders.map((order) => {
		return ordersRef.doc().set(order);
	});
};
export const getOrders = () => {
	const ordersRef = firestore.collection(`orders`);
	return ordersRef.get();
};
export const getUserOrders = (user) => {
	const ordersRef = firestore.collection(`orders`)
	return ordersRef.where("user.id", "==", user.id).get();
};
export const pickUpOrder = (id) => {
	firestore.collection("orders").doc(id).update({ status: "pickedup" });
};
export const finishOrder = (id) => {
	firestore.collection("orders").doc(id).update({ status: "finished" });
};


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
