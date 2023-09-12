import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Wp, wp } from "@app/helper/CustomResponsive";
import { Nunito } from "@app/helper/FontWeight";
import { NoteAppcolor } from "@app/constants/NoteAppcolor";

type Props = {
  tags?: string[];
  setTags?: (tag: string) => void;
};

const DEFAULT_PROP_TAGS = [
  "All",
  "Counseling",
  "Couple Therapy",
  "Depression",
  "Family Therapy",
  "Grief",
  "Group Therapy",
  "Individual Therapy",
  "Marriage",
  "Relationship",
  "Stress",
  "Trauma ",
];

const TagsFilter = ({
  tags = DEFAULT_PROP_TAGS,

  setTags,
}: Props) => {
  const [selectedTag, setSelectedTag] = React.useState<string>("All");

  const handleTagSelection = (tag: string) => {
    setSelectedTag(tag);
  };
  const ChangeTagColor = (
    tag: string
  ): {
    tagColor: string;
    tagTextColor: string;
  } => {
    if (tag == selectedTag) {
      return {
        tagColor: NoteAppcolor.Primary,
        tagTextColor: NoteAppcolor.OffWhiteCont,
      };
    } else {
      return {
        tagColor: NoteAppcolor.OffWhiteCont,
        tagTextColor: NoteAppcolor.Primary,
      };
    }
  };

  useEffect(() => {
    setTags?.(selectedTag);
  }, [selectedTag]); // setTags is useState function from parent component


  return (
    <ScrollView
      style={styles.TagCont}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {tags.map((item, index) => {
        return (
          <Pressable
            key={index}
            style={[
              styles.tag,
              {
                backgroundColor: ChangeTagColor(item).tagColor,
              },
            ]}
            onPress={() => {
              handleTagSelection(item);
            }}
          >
            <Text
              style={[
                styles.tagTextStyles,
                {
                  color: ChangeTagColor(item).tagTextColor,
                },
              ]}
            >
              {item}
            </Text>
          </Pressable>
        );
      })}
    </ScrollView>
  );
};

export default TagsFilter;

const styles = StyleSheet.create({
  TagCont: {
    minWidth: wp(100),
  },
  tag: {
    padding: Wp(15),
    marginRight: Wp(4),

    borderRadius: Wp(70),
    backgroundColor: NoteAppcolor.OffWhiteCont,
  },
  tagTextStyles: {
    fontFamily: Nunito(600),
    fontSize: Wp(12),
    color: NoteAppcolor.Primary,
  },
});
