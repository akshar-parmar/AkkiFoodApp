export const ShimmerUI = () => {
  return (
    <div className="restaurant-list">
      {Array(15)
        .fill(1)
        .map(() => {
          return (
            <div className="shimme-div">
              <div className="shimmer-card">
                <div className="shimmer-img">
                </div>
                <div className ="shimmer-card-text">
                    <div className="shimmer-dummy-text"></div>
                    <div className="shimmer-dummy-text"></div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default ShimmerUI;
