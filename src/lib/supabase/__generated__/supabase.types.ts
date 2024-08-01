export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

export type Database = {
  public: {
    Tables: {
      nods_page: {
        Row: {
          checksum: string | null;
          id: number;
          meta: Json | null;
          parent_page_id: number | null;
          path: string;
          source: string | null;
          type: string | null;
        };
        Insert: {
          checksum?: string | null;
          id?: number;
          meta?: Json | null;
          parent_page_id?: number | null;
          path: string;
          source?: string | null;
          type?: string | null;
        };
        Update: {
          checksum?: string | null;
          id?: number;
          meta?: Json | null;
          parent_page_id?: number | null;
          path?: string;
          source?: string | null;
          type?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "nods_page_parent_page_id_fkey";
            columns: ["parent_page_id"];
            isOneToOne: false;
            referencedRelation: "nods_page";
            referencedColumns: ["id"];
          }
        ];
      };
      nods_page_section: {
        Row: {
          content: string | null;
          embedding: string | null;
          heading: string | null;
          id: number;
          page_id: number;
          slug: string | null;
          token_count: number | null;
        };
        Insert: {
          content?: string | null;
          embedding?: string | null;
          heading?: string | null;
          id?: number;
          page_id: number;
          slug?: string | null;
          token_count?: number | null;
        };
        Update: {
          content?: string | null;
          embedding?: string | null;
          heading?: string | null;
          id?: number;
          page_id?: number;
          slug?: string | null;
          token_count?: number | null;
        };
        Relationships: [
          {
            foreignKeyName: "nods_page_section_page_id_fkey";
            columns: ["page_id"];
            isOneToOne: false;
            referencedRelation: "nods_page";
            referencedColumns: ["id"];
          }
        ];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      binary_quantize:
        | {
            Args: {
              "": string;
            };
            Returns: unknown;
          }
        | {
            Args: {
              "": unknown;
            };
            Returns: unknown;
          };
      get_page_parents: {
        Args: {
          page_id: number;
        };
        Returns: {
          id: number;
          parent_page_id: number;
          path: string;
          meta: Json;
        }[];
      };
      halfvec_avg: {
        Args: {
          "": number[];
        };
        Returns: unknown;
      };
      halfvec_out: {
        Args: {
          "": unknown;
        };
        Returns: unknown;
      };
      halfvec_send: {
        Args: {
          "": unknown;
        };
        Returns: string;
      };
      halfvec_typmod_in: {
        Args: {
          "": unknown[];
        };
        Returns: number;
      };
      hnsw_bit_support: {
        Args: {
          "": unknown;
        };
        Returns: unknown;
      };
      hnsw_halfvec_support: {
        Args: {
          "": unknown;
        };
        Returns: unknown;
      };
      hnsw_sparsevec_support: {
        Args: {
          "": unknown;
        };
        Returns: unknown;
      };
      hnswhandler: {
        Args: {
          "": unknown;
        };
        Returns: unknown;
      };
      ivfflat_bit_support: {
        Args: {
          "": unknown;
        };
        Returns: unknown;
      };
      ivfflat_halfvec_support: {
        Args: {
          "": unknown;
        };
        Returns: unknown;
      };
      ivfflathandler: {
        Args: {
          "": unknown;
        };
        Returns: unknown;
      };
      l2_norm:
        | {
            Args: {
              "": unknown;
            };
            Returns: number;
          }
        | {
            Args: {
              "": unknown;
            };
            Returns: number;
          };
      l2_normalize:
        | {
            Args: {
              "": string;
            };
            Returns: string;
          }
        | {
            Args: {
              "": unknown;
            };
            Returns: unknown;
          }
        | {
            Args: {
              "": unknown;
            };
            Returns: unknown;
          };
      match_page_sections: {
        Args: {
          embedding: string;
          match_threshold: number;
          match_count: number;
          min_content_length: number;
        };
        Returns: {
          id: number;
          page_id: number;
          slug: string;
          heading: string;
          content: string;
          similarity: number;
        }[];
      };
      sparsevec_out: {
        Args: {
          "": unknown;
        };
        Returns: unknown;
      };
      sparsevec_send: {
        Args: {
          "": unknown;
        };
        Returns: string;
      };
      sparsevec_typmod_in: {
        Args: {
          "": unknown[];
        };
        Returns: number;
      };
      vector_avg: {
        Args: {
          "": number[];
        };
        Returns: string;
      };
      vector_dims:
        | {
            Args: {
              "": string;
            };
            Returns: number;
          }
        | {
            Args: {
              "": unknown;
            };
            Returns: number;
          };
      vector_norm: {
        Args: {
          "": string;
        };
        Returns: number;
      };
      vector_out: {
        Args: {
          "": string;
        };
        Returns: unknown;
      };
      vector_send: {
        Args: {
          "": string;
        };
        Returns: string;
      };
      vector_typmod_in: {
        Args: {
          "": unknown[];
        };
        Returns: number;
      };
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};

type PublicSchema = Database[Extract<keyof Database, "public">];

export type Tables<
  PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] & PublicSchema["Views"]) | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] & PublicSchema["Views"])
  ? (PublicSchema["Tables"] & PublicSchema["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R;
    }
    ? R
    : never
  : never;

export type TablesInsert<
  PublicTableNameOrOptions extends keyof PublicSchema["Tables"] | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
  ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I;
    }
    ? I
    : never
  : never;

export type TablesUpdate<
  PublicTableNameOrOptions extends keyof PublicSchema["Tables"] | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
  ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U;
    }
    ? U
    : never
  : never;

export type Enums<
  PublicEnumNameOrOptions extends keyof PublicSchema["Enums"] | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
  ? PublicSchema["Enums"][PublicEnumNameOrOptions]
  : never;
