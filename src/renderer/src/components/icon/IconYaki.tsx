import styles from "./iconyaki.module.css";

interface IconYakiProps {
  iconStr: string;
  viewBox: string;
  role?: string;
}

export interface IconProps {
  size?: number;
  className?: string;
  onClick?: () => void;
}

const withIconYaki = ({ iconStr, viewBox, role = "iconyaki" }: IconYakiProps) => {
  return function Icon({ size, className, ...rest }: IconProps) {
    return (
      <span className={styles.iconyaki} {...rest}>
        <svg
          role={role}
          className={className}
          viewBox={viewBox}
          style={{ fontSize: size }}
          strokeWidth={0}
          dangerouslySetInnerHTML={{ __html: iconStr }}
        />
      </span>
    );
  };
};

export default withIconYaki;
