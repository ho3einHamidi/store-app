import { useParams } from "react-router-dom";
import { useProductDetails } from "../context/ProductsContext";
import Loader from "../Components/Loader";

function DetailsPage() {
  const { id } = useParams();
  const productDetalis = useProductDetails(+id);
  if (!productDetalis) return <Loader />;
  console.log(productDetalis);
  return <div>DetailsPage</div>;
}

export default DetailsPage;
