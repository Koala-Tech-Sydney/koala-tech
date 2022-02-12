import TreeView from "@mui/lab/TreeView";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import TreeItem from "@mui/lab/TreeItem";

import useContentTree, { ContentTree } from "../../hooks/useContentTree";

import styles from "./SideNavBar.module.scss";

const renderTree = (data: {
  id: string;
  name: string;
  path: string;
  children?: ContentTree;
}) => (
  <TreeItem key={data.id} nodeId={data.id} label={data.name}>
    {Array.isArray(data.children)
      ? data.children.map((child) => renderTree(child))
      : null}
  </TreeItem>
);

type Props = {
  data: ContentTree;
};

const SideNavBar: React.FC<Props> = ({ data }) => {
  data = useContentTree(data);
  console.log("Hahaha");
  console.log(data);
  return (
    <TreeView
      className={styles.side_nav_bar}
      aria-label="Side Navigation Bar"
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpanded={["root"]}
      defaultExpandIcon={<ChevronRightIcon />}
      sx={{ height: 110, flexGrow: 1, maxWidth: 400, overflowY: "auto" }}
    >
      {data.map((child) => {
        return renderTree(child);
      })}
    </TreeView>
  );
};

export default SideNavBar;
