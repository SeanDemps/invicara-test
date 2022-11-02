import styles from "./workstation.module.css";
import useFetch from "./useFetch";

// import Schedule from "./Schedule";

const workstationUrl =
  "https://mocki.io/v1/cb8f8cea-8c86-41be-8143-1122fc364a1e"; // store as constant in another file

const Workstation = () => {
  const { data, loading, error } = useFetch(workstationUrl);
  const { desk_number, currently_reserved, schedule } = data;

  // currently reserved could be worked out dynamically from the schedule
  // on the frontend, but I'm assuming it's a field in the API response
  const availabilityDotClasses = `${styles.dot} ${
    currently_reserved ? styles.red : styles.green
  }`;

  return (
    <div>
      {error ? <span>An Error Occured</span> : null}
      {/* <ErrorMessage error={error}> display proper error messaging*/}
      {loading ? (
        <span>Loading!</span>
      ) : (
        // <LoadingSpinner /> well designed spinner instead of span
        <>
          <h3 className={availabilityDotClasses}>Desk Number: {desk_number}</h3>
          <p>{currently_reserved ? "Unavailable" : "Available Now"}</p>
          <span>{schedule}</span>
          {/* <Schedule {...schedule}></Schedule> instead of span*/}
        </>
      )}
    </div>
  );
};

export default Workstation;
