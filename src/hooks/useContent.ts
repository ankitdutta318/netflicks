import { useEffect, useState, useContext } from 'react';
import { FirebaseContext } from '../context/auth';

export type TargetCategoryType = 'series' | 'films';

export default function useContent(target: TargetCategoryType): any {
  const [content, setContent] = useState([]);
  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    firebase
      .firestore()
      .collection(target)
      .get()
      .then((snapshot: any) => {
        const allContent = snapshot.docs.map((contentObj: any) => ({
          ...contentObj.data(),
          docId: contentObj.id,
        }));

        setContent(allContent);
      })
      .catch((error: any) => {
        console.log(error.message);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { [target]: content };
}
